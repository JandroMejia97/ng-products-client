import { ThrowStmt } from "@angular/compiler";

export class User {
  id: number | string;
  email: string;
  lastLogin?: Date;
  isSuperuser: boolean;
  username: string;
  firstName?: string;
  lastName?: string;
  isStaff: boolean;
  isActive: boolean;
  dateJoined?: Date;
  groups?: any[];
  userPermissions?: any[];

  constructor(
    id: number | string,
    email: string,
    username: string,
    isStaff?: boolean,
    isActive?: boolean,
    isSuperuser?: boolean
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.isStaff = isStaff ? isStaff : false;
    this.isActive = isActive ? isActive : false;
    this.isSuperuser = isSuperuser ? isSuperuser : false;
  }
}
