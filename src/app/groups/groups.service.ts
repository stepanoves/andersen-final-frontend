import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class GroupsService {

  getGroups() {
    return this.http.get('http://localhost:3000/groups', {
      withCredentials: true
    });
  }

  addGroup(title: string) {
    this.http.post('http://localhost:3000/groups', {
      title: title
    }, {
      withCredentials: true
    }).subscribe();
  };
  constructor(
    private http: HttpClient,
  ) {  }
}
