export class OAuthToken {
  scope: string;
  espiresIn: number;
  tokenType: string;
  accessToken: string;
  refreshToken: string;

  constructor(
    scope: string,
    espiresIn: number,
    tokenType: string,
    accessToken: string,
    refreshToken: string,
  ) {
    this.scope = scope;
    this.espiresIn = espiresIn;
    this.tokenType = tokenType;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
