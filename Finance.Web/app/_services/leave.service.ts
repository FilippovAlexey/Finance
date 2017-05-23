import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService, HeaderType, currentUserName } from '../_services/index';
import {Leave} from "../_models/index";

@Injectable()
export class LeaveService {
    constructor(private http: HttpService) {
    }

    add(leaveType: number, calendarType: number, startDate: string, endDate: string, description: string, approver: string, backup: string) {
        let body = "typeId=" + leaveType + "&destinationCalendarTypeId=" + calendarType + "&startDate=" + startDate + "&endDate=" + endDate + "&statusId=1" + "&description=" + description + "&approver=" + approver + "&backup=" + backup;
        return this.http.post('api/Leave/AddLeave', body, HeaderType.Form);
    }

    getActualDuration(leaveType: number, calendarType: number, startDate: string, endDate: string)
        : Observable<number> {
        let body = "typeId=" + leaveType + "&destinationCalendarTypeId=" + calendarType + "&startDate=" + startDate + "&endDate=" + endDate;
        return this.http.post('api/Leave/GetActualDuration', body, HeaderType.Form)
            .map((response: Response) => {
                return response.json();
            });     
    }

    get():Observable<any[]> {
        return this.http.get('api/Leave/GetLeaves', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });       
    }
    getUserList():Observable<any[]> {
        return this.http.get('api/User/GetUserNames', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });       
    }
}