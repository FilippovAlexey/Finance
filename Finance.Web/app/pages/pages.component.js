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
let PagesComponent = class PagesComponent {
    constructor() {
        this.currentPageChange = new core_1.EventEmitter();
        this.currentPage = 1;
        this.pages = [0];
    }
    get pagesCount() {
        return this._pagesCount;
    }
    set pagesCount(value) {
        if (!value || value == 0)
            return;
        this._pagesCount = value;
        this.build(1);
    }
    build(page) {
        this.currentPage = page;
        this.currentPageChange.emit(page);
        this.pages.length = 0;
        this.pages.push(1);
        if (page > 2)
            this.pages.push(page - 1);
        if (page > 1 && page < this._pagesCount)
            this.pages.push(page);
        if (page < this._pagesCount - 1)
            this.pages.push(page + 1);
        this.pages.push(this._pagesCount);
    }
};
__decorate([
    core_1.Input('pagesCount'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PagesComponent.prototype, "pagesCount", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PagesComponent.prototype, "currentPageChange", void 0);
PagesComponent = __decorate([
    core_1.Component({
        selector: 'pages',
        moduleId: module.id,
        templateUrl: "pages.component.html"
    }),
    __metadata("design:paramtypes", [])
], PagesComponent);
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map