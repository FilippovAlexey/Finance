import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'pages',
    moduleId: module.id,
    templateUrl: "pages.component.html"
})
export class PagesComponent {
    private _pagesCount: number;
    get pagesCount(): number {
        return this._pagesCount;
    }
    @Input('pagesCount') set pagesCount(value: number) {
        if (!value || value==0)
            return;
        this._pagesCount = value;
        this.build(1);
    }



    @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>();
    currentPage: number;
    pages: number[];
    constructor() {
        this.currentPage = 1;
        this.pages = [0];
    }
    public build(page: number): void {
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
}