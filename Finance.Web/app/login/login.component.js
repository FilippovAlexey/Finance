"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const index_1 = require("../_services/index");
let LoginComponent = class LoginComponent {
    constructor(
        // private route: ActivatedRoute,
        router, authenticationService, alertService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.returnUrl = "";
    }
    ngOnInit() {
        let successLogout = this.authenticationService.logout();
        this.returnUrl = "/home";
        if (successLogout) {
            successLogout.subscribe(() => {
            }, error => {
                this.router.navigate([this.returnUrl]);
                let details = error.json().error;
                this.alertService.error(details);
            });
        }
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';        
    }
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(() => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
            this.loading = false;
        });
    }
    toRegister() {
        this.router.navigate(['register']);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map