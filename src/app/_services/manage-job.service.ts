import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ManageJobService {

    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getJobs(id: number) {
        return this.http.get(this.baseUrl + 'ManageJobs/' + id);
    }

    getApplications(id: number) {
        return this.http.get(this.baseUrl + 'applications/' + id);
    }

    getApplicationsForEmp(id: number, jobId: number) {
        return this.http.get(this.baseUrl + 'ManageJobs/' + id + '/Applicantions/' + jobId);
    }
}
