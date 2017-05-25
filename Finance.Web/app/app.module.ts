import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, RegisterService, FinanceProjectService,  ApproveService, HttpService, LeaveService, KeysPipe, UserService, ReportService, TeamCalendarService, FileLoadService, DateService, MapDictionaryService, ViewDataService, GlobalService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AddLeaveComponent, HistoryLeaveComponent } from './leave/index';
import { TeamCalendarComponent } from './calendar/index';
import { ReportComponent } from './report/index';
import { LoadDataComponent } from './load-data/index';
import { ApproveComponent } from './approve/index';
import { MapDictionaryComponent} from './map-dictionary/index';
import { ChartModule } from 'angular2-highcharts';
import {TabControl, Tab} from './tab-control/index';
import { ViewDataComponent } from './view-data/index';
import { PagesComponent } from './pages/index';


import { RegisterComponent } from './register/index';
import {ProjectCrudComponent} from './project-crud/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CommonModule,
        ChartModule.forRoot(require('highcharts'))
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AlertComponent,
        ApproveComponent,
        LoginComponent,
        AddLeaveComponent,
        HistoryLeaveComponent,
        ReportComponent,
        LoadDataComponent,
        TeamCalendarComponent,
        KeysPipe,
        MapDictionaryComponent,
        TabControl,
        ViewDataComponent,
        PagesComponent,
        Tab,

        RegisterComponent,
        ProjectCrudComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        UserService,
        ReportService,
        AuthGuard,
        AlertService,
        ApproveService,
        AuthenticationService,
        HttpService,
        LeaveService,
        BaseRequestOptions,
        TeamCalendarService,
        FileLoadService,
        DateService,
        MapDictionaryService,
        GlobalService,
        ViewDataService,

        RegisterService,
        FinanceProjectService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }