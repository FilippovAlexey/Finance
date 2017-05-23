import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { currentUserName, HttpService, HeaderType, GlobalService as Global } from '../_services/index';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpService) {          
    }

    login(userName: string, password: string) {
        let body = "userName=" + userName + "&password=" + password + "&grant_type=password";

        return this.http.post('/Token', body, HeaderType.Form)
            .map((response: Response) => {
                let user = response.json();
                if (user && user.access_token) {
                    localStorage.setItem(currentUserName, JSON.stringify(user));
                    Global.initCurrentUser();
                    Global.updateIsLoggedIn();
                }
            });
    }

    logout() {
        if (Global.getCurrentUser()) {
            let url = 'api/Account/Logout';
            let result = this.http.post(url, null, HeaderType.Json)
                .map((response: Response) => {
                    if (response && response.statusText === 'OK') {
                        localStorage.removeItem(currentUserName);
                        Global.clearCurrentUser();
                        Global.updateIsLoggedIn();
                    }
                });
            return result;
        }
    }
}