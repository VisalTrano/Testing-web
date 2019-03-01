import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {SubmitResumeComponent} from './candidates/submit-resume/submit-resume.component';
import {ManageJobsComponent} from './page/manage-jobs/manage-jobs.component';
import {ManageApplicationComponent} from './page/manage-application/manage-application.component';
import {CompaniesDetailComponent} from './companies/companies-detail/companies-detail.component';
import {CompaniesListComponent} from './companies/companies-list/companies-list.component';
import {CompaniesComponent} from './companies/companies.component';
import {JobsComponent} from './jobs/jobs.component';
import {JobsListComponent} from './jobs/jobs-list/jobs-list.component';
import {JobsDetailComponent} from './jobs/jobs-detail/jobs-detail.component';
import {ResumeComponent} from './resume/resume.component';
import {ResumeListComponent} from './resume/resume-list/resume-list.component';
import {ResumeDetailComponent} from './resume/resume-detail/resume-detail.component';
import {HomeComponent} from './page/home/home.component';
import {PostJobComponent} from './page/post-job/post-job.component';

const routes: Routes = [
    { path: '' , redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sign-up', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'submit-resume', component: SubmitResumeComponent},
    { path: 'jobs', component: JobsComponent, children: [
            { path: '', component: JobsListComponent},
            { path: ':id', component: JobsDetailComponent},
        ]},
    {path: 'companies', component: CompaniesComponent, children: [
            { path: '', component: CompaniesListComponent},
            { path: ':id', component: CompaniesDetailComponent},
        ]},
    { path: 'resumes', component: ResumeComponent, children: [
            { path: '', component: ResumeListComponent},
            { path: ':id', component: ResumeDetailComponent},
        ]},
    { path: 'post-job', component: PostJobComponent},
    { path: 'manage-jobs', component: ManageJobsComponent},
    { path: 'manage-application', component: ManageApplicationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
