import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/auth.guard';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';
import { CalendarMatchesComponent } from './components/calendar-matches/calendar-matches.component';
import { CurrentMatchesComponent } from './components/current-matches/current-matches.component';
import { PastMatchesComponent } from './components/past-matches/past-matches.component';

const cmatches: Routes = [
    {
        path: 'UserLanding',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/UserLanding/current-matches',
                pathMatch: 'full'

            },
            {
                path: 'favourite-list',
                component: FavouriteListComponent,
            },
            {
                path: 'calendar-matches',
                component: CalendarMatchesComponent,
            },
            {
                path: 'current-matches',
                component: CurrentMatchesComponent

            },
            {
                path: 'past-matches',
                component: PastMatchesComponent
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(cmatches)
    ],
    exports: [
        RouterModule
    ]
})

export class MovieRouterModule { }