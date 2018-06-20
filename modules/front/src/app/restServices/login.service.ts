import { Injectable } from '@angular/core';
import {CubaApp} from '@cuba-platform/rest/dist-node/cuba';
@Injectable()

export class LoginService {
  cubaApp: CubaApp;
  constructor() { }

  login(appUrl: string, login: string, password: string): Promise<{}> {
    this.cubaApp = new CubaApp('', appUrl);
    return this.cubaApp.login(login, password);
  }
}
