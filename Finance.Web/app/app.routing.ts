import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import { ReportComponent } from './report/index';


import { RegisterComponent } from './register/index';
import { ProjectCrudComponent } from './project-crud/index';

import { PlanBudgetComponent } from './plan-budget/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'project', component: ProjectCrudComponent },
    { path: 'project/:new', component: ProjectCrudComponent },
    { path: 'paln', component: PlanBudgetComponent },
    { path: 'report', component: ReportComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' } 
   
];

export const routing = RouterModule.forRoot(appRoutes);