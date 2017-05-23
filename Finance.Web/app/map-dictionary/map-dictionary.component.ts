import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MapDictionaryService, AlertService } from '../_services/index';
import { KeyValuePair } from '../_models/index';
import { Tab } from '../tab-control/index';

@Component({
    moduleId: module.id,
    templateUrl: 'map-dictionary.component.html'
})
export class MapDictionaryComponent implements OnInit, AfterContentInit {
    listUnmapped: Array<KeyValuePair> = new Array<KeyValuePair>();
    dictionaryValues: Array<KeyValuePair> = new Array<KeyValuePair>();
    dataLoading: boolean = false;
    tabs: Array<KeyValuePair> = new Array<KeyValuePair>();
    selectedTab: KeyValuePair;
    private changedDictionaries: Array<KeyValuePair> = new Array<KeyValuePair>();
    private _currentPage: number;
    private _itemsPerPage: number;
    private currentDictionaryType: string;

    pagesCount: number;
    constructor(
        private mapAccountService: MapDictionaryService,
        private alertService: AlertService) {
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
        let account = new KeyValuePair();
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

    selectTab(tab: KeyValuePair) {
        this.tabs.forEach(tab => tab.value = false);
        tab.value = true;
        this.selectedTab = tab;
        this.changeTab();
    }

    loadUnmapped(page: number, dictionatyType: string) {
        this.dataLoading = true;
        this.listUnmapped.length = 0;
        this.mapAccountService.getUnmapped(page, this._itemsPerPage, dictionatyType).subscribe(
            (data: Array<string>) => {
                for (var d of data) {
                    var tempo = new KeyValuePair();
                    tempo.key = d;
                    if (this.changedDictionaries.some(c => c.key === d))
                        tempo.value = this.dictionaryValues.filter(v => v.key == this.changedDictionaries.filter(c => c.key === d)[0].value)[0].value;
                    this.listUnmapped.push(tempo)
                }
                this.loadDictionaryValues();
                this.loadPagesCount();

                this.dataLoading = false;
            },
            error => this.alertService.error(error));
    }

    loadDictionaryValues() {
        let tempo: Array<KeyValuePair>;
        this.mapAccountService.getDictionaryValues(this.currentDictionaryType).subscribe(
            (data: Array<KeyValuePair>) => {
                this.dictionaryValues = data;
                let tempo = new KeyValuePair();
                tempo.key = -1;
                tempo.value = '*';
                this.dictionaryValues.unshift(tempo);
            },
            error => this.alertService.error(error))
    }

    loadPagesCount() {
        this.mapAccountService.getPagesCount(this._itemsPerPage, this.currentDictionaryType).subscribe(
            (data: number) => this.pagesCount = data,
            error => this.alertService.error(error));
    }

    setMapping(target: any) {
        if (target.children[target.selectedIndex].id == '*')
            return;
        for (let entry of this.changedDictionaries) {
            if (entry.key == target.id) {
                entry.value = target.children[target.selectedIndex].id;
                return;
            }
        }
        let pair: KeyValuePair = new KeyValuePair();
        pair.key = target.id;
        pair.value = target.children[target.selectedIndex].id;
        this.changedDictionaries.push(pair);
    }

    updateMappings() {
        this.pagesCount = 0;
        this.dataLoading = true;
        this.changedDictionaries = this.changedDictionaries.filter(c => c.value != this.dictionaryValues.filter(c => c.value == 'Not mapped')[0].key);
        this.mapAccountService.updateMappings(this.changedDictionaries, this.currentDictionaryType).subscribe(
            () => {
                this._currentPage = 1;
                this.loadUnmapped(this._currentPage, this.currentDictionaryType);
                this.loadPagesCount();
            },
            error => this.alertService.error(error));

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

    changePage($event: any) {
        if ($event.target.id == '')
            return;
        this.changedDictionaries = this.changedDictionaries.filter(c => c.value != -1);
        this._currentPage = $event.target.id;
        this.loadUnmapped(this._currentPage, this.currentDictionaryType);
    }
}