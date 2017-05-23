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
const index_2 = require("../_models/index");
let MapDictionaryComponent = class MapDictionaryComponent {
    constructor(mapAccountService, alertService) {
        this.mapAccountService = mapAccountService;
        this.alertService = alertService;
        this.listUnmapped = new Array();
        this.dictionaryValues = new Array();
        this.dataLoading = false;
        this.tabs = new Array();
        this.changedDictionaries = new Array();
    }
    ngOnInit() {
        this.fillTabs();
        this._itemsPerPage = 7;
        //this.loadDictionaryValues();
        //this.loadUnmapped(1, );
        this.currentDictionaryType = "AccountName";
        //this.loadPagesCount();
    }
    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.value == true);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs[0]);
        }
    }
    fillTabs() {
        let account = new index_2.KeyValuePair();
        account.key = 'Accounts';
        account.value = false;
        this.tabs.push(account);
        //let location = new KeyValuePair();
        //location.key = 'Locations';
        //location.value = false;
        //this.tabs.push(location);
        //let bizUnit = new KeyValuePair();
        //bizUnit.key = 'BizUnits';
        //bizUnit.value = false;
        //this.tabs.push(bizUnit);
        //let team = new KeyValuePair();
        //team.key = 'Teams';
        //team.value = false;
        //this.tabs.push(team);
    }
    selectTab(tab) {
        this.tabs.forEach(tab => tab.value = false);
        tab.value = true;
        this.selectedTab = tab;
        this.changeTab();
    }
    loadUnmapped(page, dictionatyType) {
        this.dataLoading = true;
        this.listUnmapped.length = 0;
        this.mapAccountService.getUnmapped(page, this._itemsPerPage, dictionatyType).subscribe((data) => {
            for (var d of data) {
                var tempo = new index_2.KeyValuePair();
                tempo.key = d;
                if (this.changedDictionaries.some(c => c.key === d))
                    tempo.value = this.dictionaryValues.filter(v => v.key == this.changedDictionaries.filter(c => c.key === d)[0].value)[0].value;
                this.listUnmapped.push(tempo);
            }
            this.loadDictionaryValues();
            this.loadPagesCount();
            this.dataLoading = false;
        }, error => this.alertService.error(error));
    }
    loadDictionaryValues() {
        let tempo;
        this.mapAccountService.getDictionaryValues(this.currentDictionaryType).subscribe((data) => {
            this.dictionaryValues = data;
            let tempo = new index_2.KeyValuePair();
            tempo.key = -1;
            tempo.value = '*';
            this.dictionaryValues.unshift(tempo);
        }, error => this.alertService.error(error));
    }
    loadPagesCount() {
        this.mapAccountService.getPagesCount(this._itemsPerPage, this.currentDictionaryType).subscribe((data) => this.pagesCount = data, error => this.alertService.error(error));
    }
    setMapping(target) {
        if (target.children[target.selectedIndex].id == '*')
            return;
        for (let entry of this.changedDictionaries) {
            if (entry.key == target.id) {
                entry.value = target.children[target.selectedIndex].id;
                return;
            }
        }
        let pair = new index_2.KeyValuePair();
        pair.key = target.id;
        pair.value = target.children[target.selectedIndex].id;
        this.changedDictionaries.push(pair);
    }
    updateMappings() {
        this.pagesCount = 0;
        this.dataLoading = true;
        this.changedDictionaries = this.changedDictionaries.filter(c => c.value != this.dictionaryValues.filter(c => c.value == 'Not mapped')[0].key);
        this.mapAccountService.updateMappings(this.changedDictionaries, this.currentDictionaryType).subscribe(() => {
            this._currentPage = 1;
            this.loadUnmapped(this._currentPage, this.currentDictionaryType);
            this.loadPagesCount();
        }, error => this.alertService.error(error));
    }
    changeTab() {
        switch (this.selectedTab.key) {
            case "Accounts":
                this.changedDictionaries.length = 0;
                this.currentDictionaryType = "AccountName";
                this.loadUnmapped(1, this.currentDictionaryType);
                break;
            case "Locations":
                this.changedDictionaries.length = 0;
                this.currentDictionaryType = "Location";
                this.loadUnmapped(1, this.currentDictionaryType);
                break;
            case "BizUnits":
                this.changedDictionaries.length = 0;
                this.currentDictionaryType = "ProjectBu ";
                this.loadUnmapped(1, this.currentDictionaryType);
                break;
            case "Teams":
                this.changedDictionaries.length = 0;
                this.currentDictionaryType = "Team";
                this.loadUnmapped(1, this.currentDictionaryType);
                break;
        }
    }
    changePage($event) {
        if ($event.target.id == '')
            return;
        this.changedDictionaries = this.changedDictionaries.filter(c => c.value != -1);
        this._currentPage = $event.target.id;
        this.loadUnmapped(this._currentPage, this.currentDictionaryType);
    }
};
MapDictionaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'map-dictionary.component.html'
    }),
    __metadata("design:paramtypes", [index_1.MapDictionaryService,
        index_1.AlertService])
], MapDictionaryComponent);
exports.MapDictionaryComponent = MapDictionaryComponent;
//# sourceMappingURL=map-dictionary.component.js.map