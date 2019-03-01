import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../_model/Company';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {

  @Input() companyItem: Company;
  constructor() { }

  ngOnInit() {
  }

}
