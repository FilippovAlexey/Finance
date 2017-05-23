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
const index_1 = require("../_models/index");
const index_2 = require("../_services/index");
let ReportComponent = class ReportComponent {
    constructor(reportService, alertService, dateService) {
        this.reportService = reportService;
        this.alertService = alertService;
        this.dateService = dateService;
        this.model = new index_1.ReportSheetViewModel();
        this.filterData = new index_1.FilterValuesViewModel();
        this.filterSelected = new index_1.FilterSelectedValuesViewModel();
        this.dataLoading = false;
    }
    ngOnInit() {
        this.loadFilterData();
        this.filtrate();
    }
    buildAccountChart() {
        let chartData = new Array();
        if (this.model.rows != null) {
            for (var j = 0; j < this.model.rows.length; j++) {
                let tmpData = [];
                for (var i = 0; i < this.model.rows[j].cells.length; i++) {
                    if ((i - 1) % 3 == 0) {
                        tmpData.push(this.model.rows[j].cells[i]);
                    }
                }
                chartData.push({
                    data: tmpData,
                    name: this.model.rows[j].name
                });
            }
        }
        this.accountChartModel = {
            title: { text: '' },
            chart: {
                zoomType: 'x',
                margin: 75
            },
            series: chartData,
            xAxis: [{
                    type: 'category',
                    categories: this.model.titles
                }]
        };
    }
    buildComponentChartChart() {
        let categories = new Array();
        if (this.model.componentChart != null) {
            let chartData = new Array();
            for (let i of this.model.componentChart.series) {
                chartData.push({
                    data: i.values,
                    name: i.name
                });
            }
            this.componentChartModel = {
                title: { text: '' },
                chart: {
                    type: 'column',
                    zoomType: 'x'
                },
                series: chartData,
                xAxis: [{
                        type: 'category',
                        categories: this.model.componentChart.categories
                    }]
            };
        }
    }
    filtrate() {
        this.dataLoading = true;
        this.reportService.getFilteredReport(this.filterSelected).subscribe((data) => {
            if (data != null) {
                this.model = data;
                this.clearTotalHoutsPersons();
            }
            else {
                this.clearModel();
            }
            this.dataLoading = false;
            this.buildAccountChart();
            this.buildComponentChartChart();
        }, error => {
            error._body = (JSON.parse(error.text())).error;
            this.alertService.error(error);
            this.dataLoading = false;
        });
    }
    loadFilterData() {
        this.reportService.getFilterData().subscribe((data) => {
            this.filterData = data;
            setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
        }, error => this.alertService.error(error));
        this.setDateInterval('3mounth');
        this.filterSelected.endDate = this.dateService.getDate(0);
        this.filterSelected.reportInterval = 0;
    }
    onAccountChartSelection(e) {
        this.accountChartModel.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.accountChartModel.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }
    onComponentChartSelection(e) {
        this.componentChartModel.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.componentChartModel.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }
    clearModel() {
        if (this.model.rows != null && this.model.titles != null && this.model.total != null) {
            this.model.rows.length = 0;
            this.model.titles.length = 0;
            this.model.total.length = 0;
            this.model.componentChart.categories.length = 0;
            this.model.componentChart.series.length = 0;
        }
    }
    setDateInterval(event) {
        switch (event) {
            case '1mounth':
                this.filterSelected.startDate = this.dateService.getDate(-1, true);
                break;
            case '3mounth':
                this.filterSelected.startDate = this.dateService.getDate(-3, true);
                break;
            case '6mounth':
                this.filterSelected.startDate = this.dateService.getDate(-6, true);
                break;
            case '1year':
                this.filterSelected.startDate = this.dateService.getDate(-12, true);
                break;
        }
    }
    clearTotalHoutsPersons() {
        for (let i = -1; i < this.model.total.length; i += 3) {
            this.model.total[i] = " ";
        }
    }
};
ReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['report.css'],
        templateUrl: 'report.component.html'
    }),
    __metadata("design:paramtypes", [index_2.ReportService,
        index_2.AlertService,
        index_2.DateService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map