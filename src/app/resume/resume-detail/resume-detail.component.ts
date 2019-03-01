import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Photo} from '../../_model/Photo';
import {Resume, ResumeCategoryDeatil} from '../../_model/Resume';
import {ResumeService} from '../../_services/resume.service';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss']
})
export class ResumeDetailComponent implements OnInit {

  resume: Resume;
  resumeCategory: ResumeCategoryDeatil[];
  photo: Photo;
  constructor(private resumeService: ResumeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.resume = {} as Resume;
    this.photo = {} as Photo;
    this.getResumeById();
  }
  getResumeById() {
    this.resumeService.resumeById(+this.route.snapshot.params['id']).subscribe(
      (data: Resume) => {
        this.resume = data;
        this.photo = this.resume.photo;
        console.log( 'url', this.resume.photo.url);
      },
      error1 => {
        console.log(error1.message);
      },
      () => {
        console.log(this.resume);
        console.log('category', this.resumeCategory);
      }
    );
  }

}
