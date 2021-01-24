import { Observable } from 'rxjs';
import { LoginObject } from '@utils/models/auth/login-object.model';


export interface BasicAuth {
  login(user: LoginObject): Observable<any>;
  signin(user: LoginObject): Observable<any>;
  logout(): void;
  isAuthenticated(): boolean;
}
