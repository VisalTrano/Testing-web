import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ApplicationService} from '../../_services/application.service';
import {AuthService} from '../../_services/auth.service';

@Component({
    selector: 'app-apply-job',
    templateUrl: './apply-job.component.html',
    styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

    email: string;
    message: string;
    // job: Job;
    userId: any;
    appObj: { JobId: number, EmailAddress: string, Message: string, UserId: number };

    constructor(public dialogRef: MatDialogRef<ApplyJobComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private applyService: ApplicationService, private authService: AuthService) {
    }

    ngOnInit() {
        this.userId = this.authService.getUserId();
        console.log(this.userId);
    }

    onSubmit(formObj: NgForm) {
        this.email = formObj.value.email;
        this.message = formObj.value.message;
        // this.job = this.data;
        this.appObj = {JobId: this.data.data, EmailAddress: this.email, Message: this.message, UserId: this.userId};
        console.log(this.appObj);
        this.postApplication(this.appObj);
    }

    postApplication(obj: any) {
        this.applyService.postApplication(obj).subscribe(
            (data: any) => {
                console.log(data);
            }
        );
    }

}
