import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthenticationService, private router: Router) { }
  
    canActivate() {
  
      if (!this.authService.isTokenExpired())
        return true;
      this.router.navigate(['/login']);
      return false;
    
    }
  }
