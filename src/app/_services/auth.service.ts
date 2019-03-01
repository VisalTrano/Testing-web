import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
    baseUrl = environment.apiUrl;
    jwtHelper = new JwtHelperService();
    decodeToken: any;
    userTypeId: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    login(model: any) {
        return this.http.post(this.baseUrl + 'auth/login', model).pipe(
            map((response: any) => {
                const user = response;
                if (user) {
                    localStorage.setItem('token', user.token);
                    this.decodeToken = this.jwtHelper.decodeToken(user.token);
                    console.log(this.decodeToken);
                }
            })
        );
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getDecodeToken() {
        return this.jwtHelper.decodeToken(this.getToken());
    }

    getUserId() {
        if (this.getDecodeToken()) {
            return this.getDecodeToken().nameid;
        } else {
            return 0;
        }
    }

    register(model: any) {
        return this.http.post(this.baseUrl + 'auth/register', model);
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    userType(id: number) {
        return this.http.get(this.baseUrl + 'auth/userType/' + id);
    }


}
