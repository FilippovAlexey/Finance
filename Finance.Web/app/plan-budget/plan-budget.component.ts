import { Component, OnInit } from '@angular/core';
import { MapDictionaryService, AlertService, DateService } from '../_services/index';
import {FilterSelectedValuesViewModel} from "../_models/filterSelectedValuesViewModel";

@Component({
    moduleId: module.id,
    templateUrl: 'plan-budget.component.html'
})
export class PlanBudgetComponent implements OnInit {
	filterSelected: FilterSelectedValuesViewModel = new FilterSelectedValuesViewModel();
	dataLoading = true;
	isStep =  false;
    constructor(
        private mapAccountService: MapDictionaryService,
        private alertService: AlertService,
        private dateService:DateService) {
    }

	ngOnInit() {
		this.filterSelected.endDate = this.dateService.getDate(1, true);
		setTimeout(function () { this.dataLoading = false; }.bind(this), 700);
    }

	step() {
		this.dataLoading = true;
		this.isStep = true;
		setTimeout(function () { this.dataLoading = false; }.bind(this), 700);
	}

	rem() {
		this.dataLoading = true;
		this.isStep = false;
		setTimeout(function () { this.dataLoading = false; }.bind(this), 700);
	}
}