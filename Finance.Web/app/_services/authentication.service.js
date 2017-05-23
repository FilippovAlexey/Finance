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
require("rxjs/add/operator/map");
const index_1 = require("../_services/index");
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
    }
    login(userName, password) {
        let body = "userName=" + userName + "&password=" + password + "&grant_type=password";
        return this.http.post('/Token', body, index_1.HeaderType.Form)
            .map((response) => {
            let user = response.json();
            if (user && user.access_token) {
                localStorage.setItem(index_1.currentUserName, JSON.stringify(user));
                index_1.GlobalService.initCurrentUser();
                index_1.GlobalService.updateIsLoggedIn();
            }
        });
    }
    logout() {
        if (index_1.GlobalService.getCurrentUser()) {
            let url = 'api/Account/Logout';
            let result = this.http.post(url, null, index_1.HeaderType.Json)
                .map((response) => {
                if (response && response.statusText === 'OK') {
                    localStorage.removeItem(index_1.currentUserName);
                    index_1.GlobalService.clearCurrentUser();
                    index_1.GlobalService.updateIsLoggedIn();
                }
            });
            return result;
        }
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map