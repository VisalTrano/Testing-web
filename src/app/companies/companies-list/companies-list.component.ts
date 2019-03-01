import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CompaniesService} from '../../_services/companies.service';
import {Company} from '../../_model/Company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  companiesList: Company[];
  companiesFilter: Company[];
  constructor(private companyService: CompaniesService) { }

  ngOnInit() {
    this.getCompanyList();
  }
  getCompanyList() {
    this.companyService.companyList().subscribe(
      (data: Company[]) => { this.companiesList = data;
      console.log(this.companiesList); });
  }
  getCompanyFilter(key: string, location: string) {
    this.companyService.companyFilter(key, location).subscribe(
      (data: Company[]) => { this.companiesFilter = data;
      console.log('search', this.companiesFilter);
      this.companiesList = this.companiesFilter; }
    );
  }
  onSubmit(formObj: NgForm) {
    const key = formObj.value.keywords;
    const location = formObj.value.location;
    console.log('origin', key, location);
    this.getCompanyFilter(key, location);
  }

}
