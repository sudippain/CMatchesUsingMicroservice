import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
export const TOKEN_NAME:string = "jwt_token";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMatchesAppFront';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(private authService: AuthenticationService,
    public router: Router,private breakpointObserver: BreakpointObserver) { }

  logout() {
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
}