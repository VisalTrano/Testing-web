import {Component, OnInit} from '@angular/core';
import {Company} from '../_model/Company';
import {CompaniesService} from '../_services/companies.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    companies: Company[];

    constructor(public companyService: CompaniesService) {
    }

    ngOnInit() {
        this.companyService.companyList().subscribe((companies: Company[]) => {
                this.companies = companies;
                console.log(this.companies);
            },
            error => {
                console.log(error);
            });
    }

}
