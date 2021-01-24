import { JwtPayloadData } from "./jwt-payload-data.model";

export class JwtToken {
  access: string;
  refresh: string;

  constructor(access: string, refresh: string) {
    this.access = access;
    this.refresh = refresh;
  }
}
