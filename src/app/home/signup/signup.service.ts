import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Signup } from './signup';

const API = "http://localhost:3000"
@Injectable({
    providedIn: 'root'
})
export class SignupService { 

    constructor(private http: HttpClient) { }

    checkUserNameTaken(userName: string) {

        return this.http.get(API + '/user/exists/' + userName)
    }

    signup(newUser: Signup) {

        return this.http.post(API + '/user/signup', newUser)
    }
}