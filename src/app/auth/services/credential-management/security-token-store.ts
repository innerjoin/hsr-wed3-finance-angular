import {Injectable} from '@angular/core';

@Injectable()
export class SecurityTokenStore {
  private token:SecurityToken;

  constructor() {
    if(localStorage.getItem('token')){
      try{
        var data = JSON.parse(localStorage.getItem('token'));
        this.token = data;
        console.dir(this.token);
      }catch(e){
        console.error("bad token in local storage");
        console.dir(e);
        this.token = null;
      }
    }
  }

  public get storedValue():SecurityToken {
    return this.token;
  }

  public set storedValue(value:SecurityToken) {
    this.token = value;
    console.dir(value);
    localStorage.setItem('token', JSON.stringify(value));
  }
}

export interface SecurityToken {
  token: string,
  owner: any
}
