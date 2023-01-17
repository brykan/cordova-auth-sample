import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public user : string = "no user info"
  constructor(
    private authService: AuthenticationService
    ) {
  }
  async login() {
    await this.authService.login();
    this.user = JSON.stringify(await this.authService.getUserInfo());
  }
  async logout() {
    await this.authService.logout();
    this.user = JSON.stringify(await this.authService.getUserInfo());
  }
}
