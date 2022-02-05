import { authService } from '@shared/auth/service';
import { AuthActions } from '@shared/auth/store/actions';
import { store } from '@store';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { DateTime } from 'luxon';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseStatus } from '../enums';

export const refreshTokenInterceptor = (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const state = store.getState();
  const isTokenExpired =
    !state.auth.accessTokenTTL || state.auth.accessTokenTTL <= Math.floor(DateTime.utc().toSeconds());
  const isAuthenticated = !!state.auth.accessToken;
  const shouldRefreshToken = isTokenExpired && isAuthenticated;

  if (shouldRefreshToken && !config.url.includes('auth/refresh')) {
    return authService
      .refreshToken()
      .pipe(
        map((token) => {
          store.dispatch(AuthActions.saveToken({ accessToken: token }));
          config.headers.Authorization = `Bearer ${token}`;

          return config;
        }),
        catchError((error: AxiosError) => {
          if ([ResponseStatus.BAD_REQUEST, ResponseStatus.UNAUTHORIZED].includes(error.response.status)) {
            store.dispatch(AuthActions.unauthorize({ keepInterruptedNavigation: true }));
          }

          return throwError(error);
        })
      )
      .toPromise();
  }

  return Promise.resolve(config);
};
