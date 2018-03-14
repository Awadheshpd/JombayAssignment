import { Component } from '@angular/core';
import {CaseService} from './caseservice';
import {AuthenticationHelper} from './app.authentication';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CaseService, AuthenticationHelper]
})
export class AppComponent {
  title = 'app';
  caseStudies: any;

  constructor(private caseService: CaseService, private authService: AuthenticationHelper) {
    this.getAccessToken();
  }

  getAccessToken() {
    this.caseService.getAccessToken().subscribe(
      data => this.getAccessTokenSuccess(data)
    );
  }

  getAccessTokenSuccess(data) {
    this.authService.setToken(data.access_token);
    setTimeout(this.getCaseStudies(data.access_token), 0);
  }

  getCaseStudies(token){
    this.caseService.getCaseStudies().subscribe(
      data => this.getCaseStudiesSuccess(data),
      error => {
      });
  }

  getCaseStudiesSuccess(data) {
    console.log('data case', data);
    this.caseStudies = data;
  }
}
