import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {User} from '../../_model/User';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {combineAll} from 'rxjs/internal/operators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    maxDate;
    user: User;
    roles: any[] = [
        {userTypedId: 1, title: 'Subscriber'},
        {userTypedId: 2, title: 'Employer'},

    ];

    constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onRegister(form: NgForm) {
        this.user = form.value;
        console.log(form.value);
        this.authService.register(this.user).subscribe((data: User) => {
                this.user = data;
                this.user.mail = form.value.mail;
                this.user.password = form.value.password;
            },
            error => {
                console.log(error);
            }, () => {
                this.openSnackBar('Register successful', 'Done');
                this.router.navigate(['/home']);
                this.authService.login(this.user).subscribe();
            });
        console.log(this.user);
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
