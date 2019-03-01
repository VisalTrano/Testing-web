import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    uploadPhoto(file: File): Observable<any> {
        let formData = new FormData();
        formData.append('File', file);
        let params = new HttpParams();

        const options = {
            params: params,
            reportProgress: true,
            withCredentials: false,
        };
        const req = new HttpRequest('POST', this.baseUrl + 'Photo', formData, options);
        return this.http.request(req);
    }
}
