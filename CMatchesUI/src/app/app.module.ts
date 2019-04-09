
import { NgModule } from '@angular/core';
import { SharedModule } from '../app/modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { cmatchesmodule } from './modules/cmatches/cmatches.module';
import { CmatchesService } from './modules/cmatches/cmatches.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationService } from './modules/authentication/authentication.service';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,cmatchesmodule,
    BrowserAnimationsModule,
    SharedModule,
    AuthenticationModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [CmatchesService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
