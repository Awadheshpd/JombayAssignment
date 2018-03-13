import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {CaseService} from './caseservice';
import {AuthenticationHelper} from './app.authentication';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CaseService, AuthenticationHelper]
})
export class AppComponent {
  title = 'app';

  constructor(private caseService: CaseService, private authService: AuthenticationHelper) {
    this.getAccessToken();
  }

  getAccessToken() {
    this.caseService.getAccessToken().subscribe(
      data => this.getAccessTokenSuccess(data)
    );
  }

  getAccessTokenSuccess(data) {
    console.log('data.access_token', data.access_token);
    this.authService.setToken(data.access_token);
    setTimeout(this.getCaseStudies(), 0);
  }

  getCaseStudies(){
    this.caseService.getCaseStudies().subscribe(data => this.getAccessTokenSuccess(data),
      error => {
      console.log('errro',error);
      });
  }

  getCaseStudiesSuccess(data) {
    console.log('data case', data);
  }
}
