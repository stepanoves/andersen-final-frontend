import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  email = '';
  password = '';
  loggedIn;
  constructor(private authService: AuthService) {
    this.authService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }
  doLogin() {
    this.authService.doLogin(this.email, this.password);
  }
  doLogout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
