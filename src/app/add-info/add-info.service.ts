import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AddInfoService {
  addInfo(name: string, surname: string, position: string, specialization: string, resumeLink: string) {
    this.http.post('http://localhost:3000/usersinfo', {
      name: name,
      surname: surname,
      position: position,
      specialization: specialization,
      resumeLink: resumeLink
    }, {
      withCredentials: true
    }).subscribe();
  }

  constructor(
    private http: HttpClient,
  ) {  }
}

