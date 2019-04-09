import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRouterModule } from './/authentication-router.module';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    AuthenticationRouterModule,
    MatProgressBarModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [AuthenticationService],
  exports: [
    AuthenticationRouterModule
  ]
})
export class AuthenticationModule { }
