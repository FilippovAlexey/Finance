import { Component, OnInit } from '@angular/core';
import { MapDictionaryService, AlertService, DateService } from '../_services/index';
import { KeyValuePair } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'plan-budget.component.html'
})
export class PlanBudgetComponent implements OnInit {
    plantDate:any;
    constructor(
        private mapAccountService: MapDictionaryService,
        private alertService: AlertService,
        private dateService:DateService) {
    }

    ngOnInit() {
        this.plantDate = this.dateService.getDate(0);
    }

  

   
}