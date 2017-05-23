"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const common_1 = require("@angular/common");
const app_component_1 = require("./app.component");
const app_routing_1 = require("./app.routing");
const index_1 = require("./_directives/index");
const index_2 = require("./_guards/index");
const index_3 = require("./_services/index");
const index_4 = require("./home/index");
const index_5 = require("./login/index");
const index_6 = require("./leave/index");
const index_7 = require("./calendar/index");
const index_8 = require("./report/index");
const index_9 = require("./load-data/index");
const index_10 = require("./approve/index");
const index_11 = require("./map-dictionary/index");
const angular2_highcharts_1 = require("angular2-highcharts");
const index_12 = require("./tab-control/index");
const index_13 = require("./view-data/index");
const index_14 = require("./pages/index");
const index_15 = require("./register/index");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            common_1.CommonModule,
            angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))
        ],
        declarations: [
            app_component_1.AppComponent,
            index_4.HomeComponent,
            index_1.AlertComponent,
            index_10.ApproveComponent,
            index_5.LoginComponent,
            index_6.AddLeaveComponent,
            index_6.HistoryLeaveComponent,
            index_8.ReportComponent,
            index_9.LoadDataComponent,
            index_7.TeamCalendarComponent,
            index_3.KeysPipe,
            index_11.MapDictionaryComponent,
            index_12.TabControl,
            index_13.ViewDataComponent,
            index_14.PagesComponent,
            index_12.Tab,
            index_15.RegisterComponent
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            index_3.UserService,
            index_3.ReportService,
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.ApproveService,
            index_3.AuthenticationService,
            index_3.HttpService,
            index_3.LeaveService,
            http_2.BaseRequestOptions,
            index_3.TeamCalendarService,
            index_3.FileLoadService,
            index_3.DateService,
            index_3.MapDictionaryService,
            index_3.GlobalService,
            index_3.ViewDataService,
            index_3.RegisterService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map