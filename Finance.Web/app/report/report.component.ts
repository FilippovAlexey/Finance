import { Component, OnInit } from '@angular/core';
import { ReportSheetViewModel, FilterValuesViewModel, FilterSelectedValuesViewModel, ComponentChartViewModel } from '../_models/index'
import { ReportService, AlertService, DateService } from '../_services/index';
import { ChartModule } from 'angular2-highcharts';

@Component({
    moduleId: module.id,
    styleUrls: ['report.css'],
    templateUrl: 'report.component.html'
})

export class ReportComponent implements OnInit {

    model: ReportSheetViewModel = new ReportSheetViewModel();
    filterData: FilterValuesViewModel = new FilterValuesViewModel();
    filterSelected: FilterSelectedValuesViewModel = new FilterSelectedValuesViewModel();
    accountChartModel: any;
    componentChartModel: any;
    dataLoading: boolean = false;

    constructor(
        private reportService: ReportService,
        private alertService: AlertService,
        private dateService: DateService
    ) { }

    ngOnInit() {
        this.loadFilterData();
        this.filtrate();
    }

    buildAccountChart() {
        let chartData: Array<any> = new Array<any>();
        if (this.model.rows != null) {
            for (var j = 0; j < this.model.rows.length; j++) {
                let tmpData: number[] = [];
                for (var i = 0; i < this.model.rows[j].cells.length; i++) {
                    if ((i - 1) % 3 == 0) {
                        tmpData.push(this.model.rows[j].cells[i]);
                    }
                }
                chartData.push({
                    data: tmpData,
                    name: this.model.rows[j].name
                })
            }
        }
        this.accountChartModel = {
            title: { text: '' },
            chart: {
                zoomType: 'x',
                margin: 75},
            series: chartData,
            xAxis: [{
                type: 'category',
                categories: this.model.titles
            }]
        }
    }

    buildComponentChartChart() {
        let categories: Array<any> = new Array<any>();
        if (this.model.componentChart != null) {
            let chartData: Array<any> = new Array<any>();

            for (let i of this.model.componentChart.series) {
                chartData.push({
                    data: i.values,
                    name: i.name
                })
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
            }
        }
    }

    filtrate() {
        this.dataLoading = true;
        this.reportService.getFilteredReport(this.filterSelected).subscribe(
            (data: ReportSheetViewModel) => {
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

            },
            error => {
                error._body = (JSON.parse(error.text())).error;
                this.alertService.error(error);
                this.dataLoading = false;
            });
    }

    loadFilterData() {

        this.reportService.getFilterData().subscribe(
            (data: FilterValuesViewModel) => {
                this.filterData = data;
                setTimeout(() => { $(".selectpicker")['selectpicker'](); }, 0);
            },
            error => this.alertService.error(error))
        this.setDateInterval('3mounth');
        this.filterSelected.endDate = this.dateService.getDate(0);
        this.filterSelected.reportInterval = 0;
    }


    onAccountChartSelection(e: any) {
        this.accountChartModel.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.accountChartModel.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }

    onComponentChartSelection(e: any) {
        this.componentChartModel.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.componentChartModel.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }


    private clearModel() {
        if (this.model.rows != null && this.model.titles != null && this.model.total != null) {
            this.model.rows.length = 0;
            this.model.titles.length = 0;
            this.model.total.length = 0;
            this.model.componentChart.categories.length = 0;
            this.model.componentChart.series.length = 0;
        }
    }

    setDateInterval(event: string) {
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
}