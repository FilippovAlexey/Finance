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
const http_1 = require("@angular/http");
const index_1 = require("./index");
var HeaderType;
(function (HeaderType) {
    HeaderType[HeaderType["Json"] = 0] = "Json";
    HeaderType[HeaderType["Form"] = 1] = "Form";
    HeaderType[HeaderType["Xml"] = 2] = "Xml";
    HeaderType[HeaderType["Html"] = 3] = "Html";
    HeaderType[HeaderType["Text"] = 4] = "Text";
})(HeaderType = exports.HeaderType || (exports.HeaderType = {}));
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    createAuthorizationHeader(headers) {
        let token = this.getToken();
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
    }
    get(url, type) {
        let headers = this.getHeaders(type);
        return this.http.get(url, {
            headers: headers
        });
    }
    post(url, body, type) {
        if (type != null) {
            let headers = this.getHeaders(type);
            return this.http.post(url, body, {
                headers: headers
            });
        }
        else {
            return this.http.post(url, body);
        }
    }
    getToken() {
        let currentUser = JSON.parse(localStorage.getItem(index_1.currentUserName));
        if (currentUser && currentUser.access_token) {
            return currentUser.access_token;
        }
    }
    getHeaders(type) {
        let headers;
        switch (type) {
            case HeaderType.Form: {
                headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                break;
            }
            case HeaderType.Json: {
                headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                break;
            }
            default: {
                headers = new http_1.Headers();
                break;
            }
        }
        this.createAuthorizationHeader(headers);
        return headers;
    }
};
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map