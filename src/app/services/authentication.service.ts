import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { auth0NativeConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {

  constructor() {
      // Determine whether to run on mobile or the web
      const selectedConfig = auth0NativeConfig
      super(selectedConfig);
    }
     async login() {
       await super.login();
     }
    // Log out of auth provider, then automatically redirect to the app page
    // specified in the `logoutUrl` property
    async logout() {
      await super.logout();
    }
    async isAuthenticated() {
      return await super.isAuthenticated();
    }
    async getUserInfo() {
      return await super.getIdToken();
    }
}
