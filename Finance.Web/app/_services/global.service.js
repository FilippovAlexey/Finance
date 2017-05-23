"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserName = 'currentUser';
class GlobalService {
    static getCurrentUser() {
        return localStorage.getItem(exports.currentUserName);
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
GlobalService.isLoggedIn = false;
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map