import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CompaniesService} from '../../_services/companies.service';
import {Company, Industry} from '../../_model/Company';
import {Photo} from '../../_model/Photo';
import {Job} from '../../_model/Job';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.scss']
})
export class CompaniesDetailComponent implements OnInit {

  companyDetail: Company;
  photo: Photo;
  industry: Industry;
  jobs: Job[];
  constructor(private companyService: CompaniesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.companyDetail = {} as Company;
    this.photo = {} as Photo;
    this.industry = {} as Industry;
    this.jobs = {} as Job[];
    this.getCompanyById();
  }
  getCompanyById() {
    this.companyService.companyById(+this.route.snapshot.params['id']).subscribe(
      (data: Company) => {
        this.companyDetail = data;
      },
      error1 => {
        console.log(error1.message);
      },
      () => {
        // this.jobCategoryDetail = this.companyDetail.jobs[0].jobCategoryDetail;
        // console.log('jobCategory', this.jobCategoryDetail);
        this.photo = this.companyDetail.photo;
        this.industry = this.companyDetail.industry;
        this.jobs = this.companyDetail.jobs;
        console.log('url', this.photo.url);
        console.log('company', this.companyDetail);
      }
    );
  }

}
