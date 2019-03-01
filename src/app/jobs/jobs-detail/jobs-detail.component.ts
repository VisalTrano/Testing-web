import { Component, OnInit, Input } from '@angular/core';
import {JobsService} from '../../_services/jobs.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Company} from '../../_model/Company';
import {Photo} from '../../_model/Photo';
import {ApplyJobComponent} from '../../page/apply-job/apply-job.component';
import {CareerLevel, Job, JobCategoryDetails, Qualification} from '../../_model/Job';


@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.scss']
})
export class JobsDetailComponent implements OnInit {

  jobDetail: Job;
  companyDetail: Company;
  jobCategoryDetails: JobCategoryDetails[];
  jobId: number;
  carreerLevel: CareerLevel;
  qualification: Qualification;
  photo: Photo;
  constructor(private jobService: JobsService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.jobDetail = {} as Job;
    this.companyDetail = {} as Company;
    this.carreerLevel = {} as CareerLevel;
    this.qualification = {} as Qualification;
    this.photo = {} as Photo;
    this.getJobById();

  }
  getJobById() {
    this.jobService.jobById(+this.route.snapshot.params['id']).subscribe(
      (data: Job) => {
        this.jobDetail = data;
      },
      (err) => {
        console.log('Upload Error:', err);
      },
      () => {
        console.log('job', this.jobDetail);
        this.companyDetail = this.jobDetail.company;
        this.carreerLevel = this.jobDetail.careerLevel;
        this.qualification = this.jobDetail.qualification;
        this.photo = this.companyDetail.photo;
        console.log('company', this.companyDetail);
        console.log('categoryDetails', this.jobDetail.jobCategoryDetails);
        console.log('careerLevel', this.carreerLevel);
        console.log('qualification', this.qualification);
        console.log('photo', this.photo.url);
      }
    );
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(ApplyJobComponent,
      {
        data: { data: this.jobDetail.jobId}
      });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
