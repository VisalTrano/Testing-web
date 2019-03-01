import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Company} from '../_model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  userUrl = environment.apiUrl;
  constructor(protected http: HttpClient) { }
  companyList(): Observable<Company[]> {
    return this.http.get<Company[]>(this.userUrl + 'company');
  }
  companyById(id: number): Observable<Company> {
    return this.http.get<Company>(this.userUrl + 'company/' + id);
  }
  companyFilter(key: string, location: string): Observable<Company[]> {
    return this.http.get<Company[]>(this.userUrl + 'company/search?key=' + key + '&location=' + location);
  }
}
