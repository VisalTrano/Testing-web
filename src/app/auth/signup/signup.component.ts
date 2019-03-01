import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {User} from '../../_model/User';

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

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onRegister(form: NgForm) {
        this.user = form.value;
        this.authService.register(this.user).subscribe((data) => {
                console.log(data);
            },
            error => {
                console.log(error);
            });
        console.log(this.user);
    }
}
