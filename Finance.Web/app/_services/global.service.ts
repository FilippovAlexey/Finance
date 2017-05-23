import { User } from '../_models/index';

export const currentUserName: string = 'currentUser';

export class GlobalService {
    static isLoggedIn: boolean = false;
    static currentUser: User;

    static getCurrentUser() {
        return localStorage.getItem(currentUserName);
    }

    static clearCurrentUser() {
        this.currentUser = null;
    }

    static initCurrentUser() {
        this.currentUser = JSON.parse(this.getCurrentUser());
    }

    static loggedIn() {
        let user = this.getCurrentUser();
        return user != null;
    }   

    static updateIsLoggedIn() {
        GlobalService.isLoggedIn = this.loggedIn();
    }
}