import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab',
    moduleId: module.id,
    templateUrl: 'tab.component.html',
    styles: ['tab.style.css']
})

export class Tab {
    @Input('tabTitle') title: string;
    @Input('id') id: string;
    @Input() active = false;

}