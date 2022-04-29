import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../api-rest/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private router: Router){}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if( !this.loginService.isLogged()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;  
  }  
}
