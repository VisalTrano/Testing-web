import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DialogContentExampleDialog, HeaderComponent} from './header/header.component';
import {MaterailModule} from './materail.module';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubmitResumeComponent} from './candidates/submit-resume/submit-resume.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs/jobs.component';
import {CompaniesComponent} from './companies/companies.component';

import {PostJobComponent} from './page/post-job/post-job.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './page/search/search.component';
import {ManageJobsComponent} from './page/manage-jobs/manage-jobs.component';
import {ManageApplicationComponent} from './page/manage-application/manage-application.component';
import {CompanyItemComponent} from './companies/companies-list/company-item/company-item.component';
import {CompaniesDetailComponent} from './companies/companies-detail/companies-detail.component';
import {CompaniesListComponent} from './companies/companies-list/companies-list.component';
import {JobsDetailComponent} from './jobs/jobs-detail/jobs-detail.component';
import {ApplyJobComponent} from './page/apply-job/apply-job.component';
import {JobsListComponent} from './jobs/jobs-list/jobs-list.component';
import {JobItemComponent} from './jobs/jobs-list/job-item/job-item.component';
import {ResumeComponent} from './resume/resume.component';
import {ResumeListComponent} from './resume/resume-list/resume-list.component';
import {ResumeItemComponent} from './resume/resume-list/resume-item/resume-item.component';
import {ResumeDetailComponent} from './resume/resume-detail/resume-detail.component';
import {HomeComponent} from './page/home/home.component';
import {FooterComponent} from './page/footer/footer.component';
import {RemoveTag} from './pipe/removeTag';


@NgModule({
    declarations: [
        AppComponent,
        RemoveTag,
        HeaderComponent,
        SignupComponent,
        LoginComponent,
        SubmitResumeComponent,
        JobsComponent,
        JobsDetailComponent,
        JobsListComponent,
        JobItemComponent,
        CompaniesComponent,
        CompaniesDetailComponent,
        CompaniesListComponent,
        CompanyItemComponent,
        PostJobComponent,
        ResumeComponent,
        ResumeListComponent,
        ResumeItemComponent,
        ResumeDetailComponent,
        SearchComponent,
        DialogContentExampleDialog,
        ManageJobsComponent,
        ManageApplicationComponent,
        ApplyJobComponent,
        ApplyJobComponent,
        HomeComponent,
        FooterComponent

    ],
    entryComponents: [DialogContentExampleDialog, ApplyJobComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterailModule,
        AppRoutingModule,
        FlexLayoutModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
