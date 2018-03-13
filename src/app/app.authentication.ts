import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationHelper {

  private tokenKey: string = 'access_token';

  constructor() {
  }

  public setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
