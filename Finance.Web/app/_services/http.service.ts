import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { currentUserName } from './index';


export enum HeaderType {
    Json,
    Form,
    Xml,
    Html,
    Text
}

@Injectable()

export class HttpService {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        let token = this.getToken();
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
    }

    get(url: string, type: HeaderType) {
        let headers = this.getHeaders(type);  
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url: string, body: any, type?: HeaderType) {
        if (type != null) {
            let headers = this.getHeaders(type);

            return this.http.post(url, body, {
                headers: headers
            });
        }
        else
        {
            return this.http.post(url, body);
        }
    }

    private getToken() {
        let currentUser = JSON.parse(localStorage.getItem(currentUserName));
        if (currentUser && currentUser.access_token) {
            return currentUser.access_token;
        }
    }

    private getHeaders(type: HeaderType) {
        let headers: Headers;

        switch (type) {
            case HeaderType.Form: {
                headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                break;
            }
            case HeaderType.Json: {
                headers = new Headers({ 'Content-Type': 'application/json' });
                break;
            }
            default: {
                headers = new Headers();
                break;
            }
        }
        this.createAuthorizationHeader(headers);
        return headers;
    }
}