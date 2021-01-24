import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { JwtToken } from '@utils/models/auth/jwt-token.model';
import { LoginObject } from '@utils/models/auth/login-object.model';
import { JwtPayloadData } from '@utils/models/auth/jwt-payload-data.model';
import { MeStorageService } from './me-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  private readonly TOKEN_NAME = 'token';
  private readonly TOKEN_ENDPOINTS = environment.apiEndpoints.token;
  private url = `${environment.apiUrl}${this.TOKEN_ENDPOINTS.token}`;
  private tokenSubject?: BehaviorSubject<JwtToken | null>;
  public token$?: Observable<JwtToken | null>;

  get tokenValue(): JwtToken | null {
    const token = this.tokenSubject?.getValue() as JwtToken;
    return token;
  }

  set tokenValue(token: JwtToken | null ) {
    this.storageService.setItem(this.TOKEN_NAME, token);
    this.tokenSubject?.next(token);
  }

  constructor(
    private http: HttpClient,
    private storageService: MeStorageService,
  ) {
    const currentToken = this.storageService.getItem<JwtToken>(this.TOKEN_NAME);
    this.tokenSubject = new BehaviorSubject(currentToken);
    this.token$ = this.tokenSubject.asObservable();
    if (currentToken) {
      this.verifyToken();
    }
  }

  obtainPairToken(credentials: LoginObject): Observable<number> {
    return this.http.post<JwtToken>(
      `${this.url}`,
      credentials
    ).pipe(
      map((token: JwtToken) => {
        console.log('Token was obtained successfully.');
        this.tokenValue = token;
        const payload = this.decodeToken(token.access);
        return payload.userId;
      }),
    );
  }

  verifyToken(): Observable<JwtToken> | void {
    const token = this.tokenValue;
    if (token) {
      return this.http.post<any>(
        `${this.url}${this.TOKEN_ENDPOINTS.verify}`,
        { token: token.access }
      ).pipe(
        tap(() => console.log('Verifying token...')),
      );
    }
  }

  refreshToken(): Observable<JwtToken> {
    const currentToken = this.tokenValue;
    console.log('Refreshing token.');
    return this.http.post<JwtToken>(
      `${this.url}${this.TOKEN_ENDPOINTS.refresh}`,
      { refresh: currentToken?.refresh }
    ).pipe(
      tap((token: JwtToken) => {
        this.tokenValue = token;
        console.log('Token was refreshed successfully.');
      })
    );
  }

  decodeToken(token: string): JwtPayloadData {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload)) as JwtPayloadData;
    return payload;
  }

  destroyToken(): void {
    this.tokenValue = null;
    this.storageService.removeItem(this.TOKEN_NAME);
    console.log('Token was removed.');
  }
}
