import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService, HeaderType} from '../_services/index';
import { FinanceUserViewModel } from "../_models/index";

@Injectable()
export class UserService {
    constructor(private http: HttpService) {
    }

    get(): Observable<FinanceUserViewModel> {
        return this.http.get('api/User/GetUser', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }



    getName(): Observable<any> {
        return this.http.get('api/User/GetName', HeaderType.Json)
            .map((response: Response) => {
                return response.json();
            });
    }
}