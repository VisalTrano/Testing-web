import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    openedSidenav = true;
    panelOpenState = false;
    userTypeId: any;
    jwtHelper = new JwtHelperService();
    decodeToken: any;
    userId: number;

    constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {

    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    ngOnInit() {
        this.router.events.subscribe((url: any) => {
                console.log(this.authService.loggedIn());
                this.decodeToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));

                this.userId = this.decodeToken.nameid;
                this.userTypeId = this.authService.userType(this.userId).subscribe((data) => console.log('userType', data));
                console.log(this.userTypeId);

            }, error => console.log(error),
        );
    }

}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'dialog-content-example-dialog.html',
    styleUrls: ['dialog-content-example-dialog.css']
})
export class DialogContentExampleDialog {

}
