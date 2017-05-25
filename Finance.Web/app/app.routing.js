"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const index_3 = require("./_guards/index");
const index_4 = require("./leave/index");
const index_5 = require("./report/index");
const index_6 = require("./load-data/index");
const index_7 = require("./calendar/index");
const index_8 = require("./approve/index");
const index_9 = require("./map-dictionary/index");
const index_10 = require("./view-data/index");
const index_11 = require("./register/index");
const index_12 = require("./project-crud/index");
const appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'home', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'addleave', component: index_4.AddLeaveComponent },
    { path: 'viewleaves', component: index_4.HistoryLeaveComponent },
    { path: 'report', component: index_5.ReportComponent },
    { path: 'loaddata', component: index_6.LoadDataComponent },
    { path: 'calendar', component: index_7.TeamCalendarComponent },
    { path: 'approve', component: index_8.ApproveComponent },
    { path: 'mapaccounts', component: index_9.MapDictionaryComponent },
    { path: 'users', component: index_10.ViewDataComponent },
    { path: 'register', component: index_11.RegisterComponent },
    { path: 'project', component: index_12.ProjectCrudComponent },
    { path: 'project/:id', component: index_12.ProjectCrudComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map