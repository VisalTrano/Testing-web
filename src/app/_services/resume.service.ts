import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resume, ResumeCategory, ResumeCategoryDeatil} from '../_model/Resume';
import {Qualification} from '../_model/Job';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    getResumeCategory(): Observable<ResumeCategory[]> {
        return this.http.get<ResumeCategory[]>(this.baseUrl + 'SubmitResume/resumeCategory');
    }

    getQualification(): Observable<Qualification[]> {
        return this.http.get<Qualification[]>(this.baseUrl + 'jobs/Qualification/');
    }

    postResume(resume: Resume): Observable<any> {
        return this.http.post(this.baseUrl + 'SubmitResume', resume, this.httpOptions);
    }
    resumeList(): Observable<Resume[]> {
        return this.http.get<Resume[]>(this.baseUrl + 'resumes');
    }
    resumeFilter(search: {keywords: string, location: string}): Observable<Resume[]> {
        return this.http.get<Resume[]>(this.baseUrl + 'resumes/search?key='
            + search.keywords + '&location' + search.location );
    }
    resumeById(id: number): Observable<Resume> {
        return this.http.get<Resume>(this.baseUrl + 'resumes/' + id);
    }
}
