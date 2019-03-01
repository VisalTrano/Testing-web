import {Component, OnInit} from '@angular/core';
import {Application} from '../../_model/Application';
import {ManageJobService} from '../../_services/manage-job.service';

@Component({
    selector: 'app-manage-application',
    templateUrl: './manage-application.component.html',
    styleUrls: ['./manage-application.component.css']
})
export class ManageApplicationComponent implements OnInit {
    applications: Application[];

    constructor(private manageService: ManageJobService) {
    }

    ngOnInit() {
        this.manageService.getApplications(7).subscribe((data: any) => {
            console.log(data);
            this.applications = data;
        });
    }

}
