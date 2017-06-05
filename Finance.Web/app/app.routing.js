"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const index_3 = require("./_guards/index");
const index_4 = require("./report/index");
const index_5 = require("./register/index");
const index_6 = require("./project-crud/index");
const index_7 = require("./plan-budget/index");
const appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'home', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'register', component: index_5.RegisterComponent },
    { path: 'project', component: index_6.ProjectCrudComponent },
    { path: 'project/:new', component: index_6.ProjectCrudComponent },
    { path: 'paln', component: index_7.PlanBudgetComponent },
    { path: 'report', component: index_4.ReportComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map