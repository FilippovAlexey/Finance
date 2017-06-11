import { Component, OnInit } from '@angular/core';
import { DashboardTable } from "../_models/index";
import { GlobalService as Global, AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    temp: number;
    vacationPlannerDays: number;
    model: DashboardTable = new DashboardTable;
    colOptions: Object;
    pieGroupOptions: Object;
	pieOptions: Object;
	dataLoading: boolean;

    constructor(
        private userService: UserService,
        private alertService: AlertService) {
        this.colOptions = {
            chart: {
                type: 'column',
                height: 350
            },
            title: { text: 'Bills' },
            series: [{
                data: [0],
                name: 'Main'
            },
            {
                data: [9924.5],
                name: 'MoneyBox'
            },
            {
                data: [50000],
                name: 'Emergency'
            },
            {
                data: [3000],
                name: 'Occupancy'
            },
            {
                data: [450],
                name: 'Utilities'
            },
            {
                data: [625.5],
                name: 'Staff'
            },
            {
                data: [9000],
                name: 'Malcolm Reynolds'
            },
            {
                data: [7500],
                name: 'Zoy Washburne'
            },
            {
                data: [7500],
                name: 'Hoban Washburne'
            },
            {
                data: [8000],
                name: 'Inara Serra'
            },
            {
                data: [6000],
                name: 'Jayne Cobb'
            },
            {
                data: [6000],
                name: 'Kaylee Frye'
            },
            {
                data: [4500],
                name: 'Simon Tam'
            },
            {
                data: [3000],
                name: 'River Tam'
            },
            {
                data: [4500],
                name: 'Derrial Book'
            }
            ]
        };
        this.pieGroupOptions = {
            chart: {
                plotBackgroundColor: <any>null,
                plotBorderWidth: <any>null,
                plotShadow: false,
                type: 'pie',
                height: 300,
                width:300
            },
            title: {
                text: 'Bill Groups'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            series: [
                {
                    data: [
                        {
                            name: 'Default',
                            y: 66354.5

                        },
                        {
                            y: 4075.5,
                            name: 'Office'
                        },
                        {
                            y: 56000,
                            name: 'Employees'
                        }
                    ]
                }
            ]

        };

        this.pieOptions = {
            chart: {
                plotBackgroundColor: <any>null,
                plotBorderWidth: <any>null,
                plotShadow: false,
                type: 'pie',
                height: 300,
                width: 295
            },
            title: {
                text: 'Employees'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            series: [
                {
                    data: [{
                        y: 9000,
                        name: 'Malcolm Reynolds'
                    },
                    {
                        y: 7500,
                        name: 'Zoy Washburne'
                    },
                    {
                        y: 7500,
                        name: 'Hoban Washburne'
                    },
                    {
                        y: 8000,
                        name: 'Inara Serra'
                    },
                    {
                        y: 6000,
                        name: 'Jayne Cobb'
                    },
                    {
                        y: 6000,
                        name: 'Kaylee Frye'
                    },
                    {
                        y: 4500,
                        name: 'Simon Tam'
                    },
                    {
                        y: 3000,
                        name: 'River Tam'
                    },
                    {
                        y: 4500,
                        name: 'Derrial Book'
                    }
                    ]
                }
            ]
		};
	    this.dataLoading = true;
        Global.initCurrentUser();
    }

    ngOnInit() {
        this.model.futureLeaves = new Array();
		this.model.unapprovedLeaves = new Array();
	    setTimeout(function() { this.dataLoading = false; }.bind(this), 300);
    }

	pdf() {
		window.location.href = 'http://localhost:50605/home/downloadpdf';
	}
	excel() {
		window.location.href = 'http://localhost:50605/home/downloadex';
	}
}