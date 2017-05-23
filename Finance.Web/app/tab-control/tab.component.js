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
let Tab = class Tab {
    constructor() {
        this.active = false;
    }
};
__decorate([
    core_1.Input('tabTitle'),
    __metadata("design:type", String)
], Tab.prototype, "title", void 0);
__decorate([
    core_1.Input('id'),
    __metadata("design:type", String)
], Tab.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Tab.prototype, "active", void 0);
Tab = __decorate([
    core_1.Component({
        selector: 'tab',
        moduleId: module.id,
        templateUrl: 'tab.component.html',
        styles: ['tab.style.css']
    })
], Tab);
exports.Tab = Tab;
//# sourceMappingURL=tab.component.js.map