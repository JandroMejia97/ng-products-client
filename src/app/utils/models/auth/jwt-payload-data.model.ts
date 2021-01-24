export class JwtPayloadData {
  jti: string;
  exp: Date | number;
  userId: number;
  tokenType: 'refresh' | 'access';
  coldStuff?: string;

  constructor(
    jti: string,
    exp: Date | number,
    userId: number,
    tokenType: 'refresh' | 'access',
  ) {
    this.jti = jti;
    this.exp = exp;
    this.userId = userId;
    this.tokenType = tokenType;
  }
}
