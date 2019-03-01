import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm,} from '@angular/forms';
import {ResumeService} from '../../_services/resume.service';
import {Resume, ResumeCategory} from '../../_model/Resume';
import {Qualification} from '../../_model/Job';
import {FileUpload} from 'primeng/primeng';
import {PhotoService} from '../../_services/photo.service';
import {Photo} from '../../_model/Photo';

@Component({
    selector: 'app-submit-resume',
    templateUrl: './submit-resume.component.html',
    styleUrls: ['./submit-resume.component.css']
})
export class SubmitResumeComponent implements OnInit {
    resumeCategory: ResumeCategory[] = [{resumeCategoryId: 1, title: 'ggg'}, {resumeCategoryId: 2, title: 'hdfg'}];
    qualifications: Qualification[];
    resume: Resume;
    urlsForm = new FormArray([]);
    educationForm = new FormArray([]);
    experienceForm = new FormArray([]);
    photo: Photo;
    @ViewChild('fileInput') fileInput: FileUpload;

    constructor(private resumeService: ResumeService, private photoService: PhotoService) {
    }

    ngOnInit() {
        this.getResumeCategory();
        this.getQualification();
    }

    getQualification() {
        this.resumeService.getQualification().subscribe(
            (qualification: Qualification[]) => {
                this.qualifications = qualification;
            },
            error => {
                console.log(error);
            });
    }

    getResumeCategory() {
        this.resumeService.getResumeCategory().subscribe(
            (resumeCategory: ResumeCategory[]) => {
                this.resumeCategory = resumeCategory;

            },
            error => {
                console.log(error);
            });
    }

    addNewUrl() {
        this.urlsForm.push(
            new FormGroup({
                'Name': new FormControl(),
                'URL': new FormControl(),
            })
        );
    }

    addNewEducation() {
        this.educationForm.push(
            new FormGroup({
                'SchoolName': new FormControl(),
                'QualificationId': new FormControl(),
                'Date': new FormControl(),
                'Notes': new FormControl(),
            })
        );
    }

    addNewExperience() {
        this.experienceForm.push(
            new FormGroup({
                'Employer': new FormControl(),
                'JobTitle': new FormControl(),
                'Date': new FormControl(),
                'Notes': new FormControl(),
            })
        );
    }

    removeUrl(index: number) {
        this.urlsForm.removeAt(index);
    }

    removeEducation(index: number) {
        this.educationForm.removeAt(index);
    }


    onSubmit(form: NgForm) {
        if (this.fileInput.files.length === 0) {
            return;
        }
        let file: File = this.fileInput.files[0];
        this.photoService.uploadPhoto(file).subscribe(
            (res) => {
                if (!res.body) {
                    console.log('gg');
                }
                else {
                    this.photo = res.body;
                }
            },
            (err) => {
                console.log('Upload Error:', err);
            },
            () => this.addResume(this.photo.photoId, form)
        );

    }

    addResume(phId: number, form: NgForm) {
        console.log(phId);
        this.resume = form.value;
        this.resume.URLs = this.urlsForm.value;
        this.resume.educations = this.educationForm.value;
        this.resume.experiences = this.experienceForm.value;
        this.resume.candidateId = 1;
        this.resume.photoId = phId;
        this.resumeService.postResume(this.resume).subscribe();
    }
}
