import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '@utils/models/user.model';
import { SnackbarService } from './snackbar.service';
import { JwtTokenService } from './jwt-token.service';
import { environment } from '@environments/environment';
import { MeStorageService } from './me-storage.service';
import { BasicAuth } from '@utils/interfaces/basic-auth.interface';
import { LoginObject } from '@utils/models/auth/login-object.model';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService implements BasicAuth {
  private url = `${environment.apiUrl}`;
  private readonly CURRENT_USER_NAME = 'user';
  private currentUserSubject?: BehaviorSubject<User | null>;
  public currentUser$?: Observable<User | null>;

  get user(): User | null {
    return this.currentUserSubject?.getValue() as User;
  }

  set user(u: User | null) {
    this.storageService.setItem(this.CURRENT_USER_NAME, u);
    this.currentUserSubject?.next(u);
  }

  constructor(
    private http: HttpClient,
    private tokenService: JwtTokenService,
    private messageService: SnackbarService,
    private storageService: MeStorageService,
  ) {
    const currentUser = this.storageService.getItem<User>(this.CURRENT_USER_NAME);
    this.currentUserSubject = new BehaviorSubject(currentUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public login(credentials: LoginObject): Observable<User> {
    console.group('JwtAuthService');
    console.log('JwtAuthService -> login');
    return this.tokenService.obtainPairToken(credentials).pipe(
      switchMap(() => {
        console.log('User was authenticated successfully.');
        this.log('Se inició sesión correctamente.');
        return this.getCurrentUser();
      })
    );
  }

  public signin(credentials: LoginObject): Observable<any> {
    return this.http.post<User>(
      `${this.url}${environment.apiEndpoints.me}`,
      credentials
    ).pipe(
      switchMap((user: User) => {
        console.log('User was created successfully.');
        this.log(`El usuario ${user.username} se creó exitosamente.`);
        this.user = user;
        return this.tokenService.obtainPairToken(credentials);
      })
    );
  }

  private getCurrentUser(): Observable<User> {
    console.log('JwtAuthService -> getCurrentUser');
    return this.http.get<User>(
      `${this.url}${environment.apiEndpoints.me}`
    ).pipe(
      tap((user: User) => {
        console.log('User was obtained successfully.');
        this.user = user;
        console.groupEnd();
      })
    );
  }

  logout(): void {
    this.user = null;
    this.tokenService.destroyToken();
    this.storageService.removeItem(this.CURRENT_USER_NAME);
    console.log('Session was closed.');
    this.log('Se cerró la sesión.');
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  private log(message: string): void {
    this.messageService.openSnackBar(message, 'OK', {
      panelClass: 'red-snackbar'
    });
  }


}
