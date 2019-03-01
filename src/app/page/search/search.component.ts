import { Component, OnInit } from '@angular/core';
import {ResumeCategory} from '../../_model/Resume';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    resumeCategory: ResumeCategory[] = [{resumeCategoryId: 1, title: 'ggg'}, {resumeCategoryId: 2, title: 'hdfg'}];
  constructor() { }

  ngOnInit() {
  }

}
