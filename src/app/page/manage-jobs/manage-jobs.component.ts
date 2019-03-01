import {Component, OnInit} from '@angular/core';
import {ManageJobService} from '../../_services/manage-job.service';
import {Job} from '../../_model/Job';
import {Application} from '../../_model/Application';

@Component({
    selector: 'app-manage-jobs',
    templateUrl: './manage-jobs.component.html',
    styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
    jobs: Job[];

    constructor(private manageJobService: ManageJobService) {
    }

    ngOnInit() {
        this.manageJobService.getJobs(1).subscribe(
            (data: any) => {
                this.jobs = data;
                console.log(data);
            });
    }

    onOpenPanel(jobId: number) {
        console.log(jobId);
        this.manageJobService.getApplicationsForEmp(1, jobId).subscribe((data: any) => {
        });
    }
}
