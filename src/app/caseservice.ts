import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AuthenticationHelper} from './app.authentication';

@Injectable()
export class CaseService {
  baseUrl = 'https://simulationapi.ur-nl.com';

  constructor(private http: HttpClient, private authService: AuthenticationHelper) {
  }

  getAccessToken(): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = {
      'grant_type': 'password',
      'scope': 'user',
      'client_id': '4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5',
      'client_secret': '908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88',
      'auth_token': 'azd4jXWWLagyb9KzgfDJ'
    };
    return this.http.post(this.baseUrl + '/oauth/token.json', body, {headers: headers});
  }

  getCaseStudies() {
    const url = this.baseUrl + '/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(url, {headers: headers});
  }
}

