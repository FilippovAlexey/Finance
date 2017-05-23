import { HttpService, HeaderType } from '../_services/index';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { LeaveApprove } from "../_models/index";




@Injectable()
export class ApproveService {

    constructor(
        private httpService: HttpService) { }



    getLeaveData(): Observable<LeaveApprove[]> {
        return this.httpService.get('api/Leave/GetLeavesToApprove', HeaderType.Json)
            .map((response: Response) => {
                return <LeaveApprove[]>response.json();
            });
    }
    setLeaveStatus(id: number, status: number) {
        let body = "Id=" + id + "&status=" + status ;
        return this.httpService.post('api/Leave/SetLeaveStatus', body, HeaderType.Form);
    }
}