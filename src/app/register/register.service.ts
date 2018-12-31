import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RegisterService {
  err;

  doRegister(email: string, password: string) {

    return this.http.post('http://localhost:3000/users', {
      email: email,
      password: password
    }, {
      withCredentials: true
    });

  }

  constructor(
    private http: HttpClient,
  ) {  }
}

