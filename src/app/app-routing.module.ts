import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {SubmitResumeComponent} from './candidates/submit-resume/submit-resume.component';
import {JobDetailComponent} from './jobs/job-detail/job-detail.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'submit-resume', component: SubmitResumeComponent},
    {path: 'jobs', component: JobDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
