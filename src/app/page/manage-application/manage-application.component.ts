import {Component, OnInit} from '@angular/core';
import {Application} from '../../_model/Application';
import {ManageJobService} from '../../_services/manage-job.service';
import {AuthService} from '../../_services/auth.service';

@Component({
    selector: 'app-manage-application',
    templateUrl: './manage-application.component.html',
    styleUrls: ['./manage-application.component.css']
})
export class ManageApplicationComponent implements OnInit {
    applications: Application[];

    constructor(private manageService: ManageJobService, private auth: AuthService) {
    }

    ngOnInit() {
        this.manageService.getApplications(this.auth.getUserId()).subscribe((data: any) => {
            console.log(data);
            this.applications = data;
        });
    }

}
