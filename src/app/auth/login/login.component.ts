import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {NgForm} from '@angular/forms';
import {User} from '../../_model/User';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: User;

    constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
    }

    login(form: NgForm) {
        this.model = form.value;
        this.authService.login(this.model).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error.statusText);
                if (error.statusText === 'Unauthorized') {
                    this.openSnackBar('please check mail or password', 'failed');
                }
            },
            () => {
                this.openSnackBar('login successful', 'Done');
                console.log('userId' , this.authService.decodeToken.nameid);
                this.router.navigate(['/home']);
            }
        );
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logout() {
        localStorage.removeItem('token');
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
