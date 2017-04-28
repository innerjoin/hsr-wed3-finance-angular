import {Injectable} from '@angular/core';

@Injectable()
export class SecurityTokenStore {
  private token: SecurityToken;

  constructor() {
    if (localStorage.getItem('token')){
      try {
        this.token = JSON.parse(localStorage.getItem('token'));
      } catch (e) {
        this.token = null;
      }
    }
  }

  public get storedValue():SecurityToken {
    return this.token;
  }

  public set storedValue(value:SecurityToken) {
    this.token = value;
    localStorage.setItem('token', JSON.stringify(value));
  }
}

export interface SecurityToken {
  token: string;
  owner: any;
}
