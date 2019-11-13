import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  constructor(private auth: AuthService) {

  }
  canActivate(
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { access } = this.auth;
    if (!access) alert('you shall not pass!!!');
    return access;
  }

}
