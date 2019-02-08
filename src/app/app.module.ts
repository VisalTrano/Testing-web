import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MaterailModule} from './materail.module';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubmitResumeComponent} from './candidates/submit-resume/submit-resume.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {CommonModule} from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        LoginComponent,
        TrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        WelcomeComponent,
        SubmitResumeComponent,
        JobsComponent,
        JobDetailComponent,

    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterailModule,
        AppRoutingModule,
        FlexLayoutModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
