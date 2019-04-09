import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';
import { CmatchesContainerComponent } from './components/cmatches-container/cmatches-container.component';
import { CmatchesService } from './cmatches.service';
import { CalendarMatchesComponent } from './components/calendar-matches/calendar-matches.component';
import { CurrentMatchesComponent } from './components/current-matches/current-matches.component';
import { SharedModule } from '../shared/shared.module';
import { MovieRouterModule } from './cmatches-router.router';
import { TokenInterceptorService } from 'src/token-interceptor.service';
import { PastMatchesComponent } from './components/past-matches/past-matches.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    MovieRouterModule,
    MatGridListModule    
  ],
  declarations: [
  FavouriteListComponent,
  CmatchesContainerComponent,
  CalendarMatchesComponent,
  CurrentMatchesComponent,
  PastMatchesComponent
  ],
  entryComponents: [
  ],
  exports: [  MovieRouterModule    

  ],
  providers: [CmatchesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }]
})
export class cmatchesmodule { }
