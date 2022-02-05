import { Observable } from 'rxjs';

class AuthService {
  public authorize(credentials: AuthCredentials): Observable<AuthResponse> {

  }
}

export const authService = new AuthService();
