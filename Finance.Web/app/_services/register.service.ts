import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { currentUserName, HttpService, HeaderType, GlobalService as Global } from '../_services/index';

@Injectable()
export class RegisterService {

constructor(private http: HttpService) {
}

    register(userName: string, name: string, password: string) {
        let body:any = {};
        body.userName = userName;
        body.name = name;
        body.password = password;
        return this.http.post('api/Account/Register', body, HeaderType.Json)
            .map((response: Response) => {});
    }


}
