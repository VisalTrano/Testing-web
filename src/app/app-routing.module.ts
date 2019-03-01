import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {SubmitResumeComponent} from './candidates/submit-resume/submit-resume.component';
import {SearchComponent} from './page/search/search.component';
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

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'submit-resume', component: SubmitResumeComponent},
    {path: 'companies', component: CompaniesComponent, children: [
            { path: '', component: CompaniesListComponent},
            { path: ':id', component: CompaniesDetailComponent},
        ]},
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
    { path: 'home', component: HomeComponent},
    {path: 'manage-jobs', component: ManageJobsComponent},
    {path: 'manage-application', component: ManageApplicationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
