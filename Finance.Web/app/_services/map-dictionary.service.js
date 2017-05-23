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
const index_1 = require("../_services/index");
require("rxjs/add/operator/map");
let MapDictionaryService = class MapDictionaryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUnmapped(page, itemsPerPage, entityType) {
        let body = { page, itemsPerPage, entityType };
        return this.httpService.post('api/MapDictionary/GetNotMapped', body, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getPagesCount(itemsPerPage, dictionaryType) {
        return this.httpService.get('api/MapDictionary/GetPagesCount' + '?itemsPerPage=' + itemsPerPage + '&dictionaryType=' + dictionaryType, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    getDictionaryValues(dictionaryType) {
        return this.httpService.get('api/MapDictionary/GetDictionaryValues?dictionaryType=' + dictionaryType, index_1.HeaderType.Json)
            .map((response) => {
            return response.json();
        });
    }
    updateMappings(mappings, dictionaryType) {
        return this.httpService.post('api/MapDictionary/UpdateMappings?dictionaryType=' + dictionaryType, mappings, index_1.HeaderType.Json)
            .map((response) => {
            return response;
        });
    }
};
MapDictionaryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], MapDictionaryService);
exports.MapDictionaryService = MapDictionaryService;
//# sourceMappingURL=map-dictionary.service.js.map