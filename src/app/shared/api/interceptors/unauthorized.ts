import { configuration } from '@configurations';
import { AuthActions } from '@shared/auth/store/actions';
import { store } from '@store/store';
import { ResponseStatus } from '../enums';

export const unauthorizedInterceptor = (error: any): Promise<never> => {
  const { unauthorizedEndpoints } = configuration.api;

  if (
    error.response?.status === ResponseStatus.UNAUTHORIZED &&
    !unauthorizedEndpoints.includes(error.response.config.url)
  ) {
    store.dispatch(AuthActions.unauthorize({ keepInterruptedNavigation: true }));
  }

  return Promise.reject(error);
};
