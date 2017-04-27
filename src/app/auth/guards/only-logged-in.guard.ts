import { Injectable } from '@angular/core';
import { Route, CanActivate, CanLoad } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OnlyLoggedInGuard implements CanActivate { 
  constructor(private navSrvc: NavigationService, private authSrvc: AuthService) {
  }
  canActivate() {
    if (this.authSrvc.hasToken()) { 
      return true;
    } else {
      this.navSrvc.goToHome();
      return false;
    }
  }
}