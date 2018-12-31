import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './User';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class AuthService {

  loggedIn: Subject<boolean>;
  doLogin(email: string, password: string) {
    this.http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).subscribe((resp: any) => {
      this.loggedIn.next(true);
      this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
    }, (errorResp) => {
      this.loggedIn.next(false);
      errorResp.error ? this.toastr.error(errorResp.error.errorMessage) : this.toastr.error('An unknown error has occured.');
    });
  }
  getLogin() {
    this.http.get('http://localhost:3000/auth/login', {
      withCredentials: true
    }).subscribe((resp: any) => {
      this.loggedIn.next(resp.loggedIn);
    }, (errorResp) => {
      this.toastr.error('Oops, something went wrong getting the logged in status');
    });
  }
  logout() {
    this.http.post('http://localhost:3000/auth/logout', {}, {
      withCredentials: true
    }).subscribe(() => {
      this.loggedIn.next(false);
    });
  }
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.loggedIn = new Subject();
    this.getLogin();
  }
}
