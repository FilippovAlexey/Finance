import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import { AddLeaveComponent, HistoryLeaveComponent } from './leave/index';
import { ReportComponent } from './report/index';
import { LoadDataComponent } from './load-data/index';
import { TeamCalendarComponent } from './calendar/index';
import { ApproveComponent } from './approve/index';
import { MapDictionaryComponent} from './map-dictionary/index';
import { ViewDataComponent } from './view-data/index'


import { RegisterComponent }from './register/index'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'addleave', component: AddLeaveComponent },
    { path: 'viewleaves', component: HistoryLeaveComponent },
    { path: 'report', component: ReportComponent },
    { path: 'loaddata', component: LoadDataComponent },
    { path: 'calendar', component: TeamCalendarComponent },
    { path: 'approve', component: ApproveComponent },
    { path: 'mapaccounts', component: MapDictionaryComponent },
    { path: 'users', component: ViewDataComponent },


    { path: 'register', component: RegisterComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' } 
   
];

export const routing = RouterModule.forRoot(appRoutes);