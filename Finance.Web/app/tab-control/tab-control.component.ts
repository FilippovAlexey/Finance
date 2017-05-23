import { Component, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import {Tab} from './tab.component';

@Component({
   
    selector: 'tab-control',
    moduleId: module.id,
    templateUrl: 'tab-control.component.html'
})
export class TabControl implements AfterContentInit {

    @ContentChildren(Tab) tabs: QueryList<Tab>;
    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    @Output() selectionChanged = new EventEmitter<Tab>();

    selectTab(tab: Tab) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        tab.active = true;
        this.selectionChanged.emit(tab);
    }
}