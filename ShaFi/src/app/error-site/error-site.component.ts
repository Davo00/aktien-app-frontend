import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-site',
  templateUrl: './error-site.component.html',
  styleUrls: ['./error-site.component.css'],
})
export class ErrorSiteComponent implements OnInit {
  LogedIN = false;

  public ngOnInit(): void {
    if (sessionStorage.getItem('login') !== null) {
      this.LogedIN = true;
    } else {
      this.LogedIN = false;
    }
  }
}
