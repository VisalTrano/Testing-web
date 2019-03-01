import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Job} from '../_model/Job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  userUrl = environment.apiUrl;
  constructor(protected http: HttpClient) { }
  jobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.userUrl + 'jobs');
  }
  jobsFilter(search: {keywords: string, location: string}): Observable<Job[]> {
    console.log('service');
    console.log(search.keywords);
    console.log(search.location);
    return this.http.get<Job[]>(this.userUrl + 'jobs/search?key=' + search.keywords + '&location=' + search.location);
  }
  jobById(id: number): Observable<Job> {
    return this.http.get<Job>(this.userUrl + 'jobs/' + id );
  }
}
