import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GroupService {

  getGroup(id) {
    return this.http.get(`http://localhost:3000/groups/${id}`, {
      withCredentials: true
    });
  }

  addComment(groupId: number, text: string) {
    this.http.post('http://localhost:3000/posts', {
      groupId: groupId,
      text: text
    }, {
      withCredentials: true
    }).subscribe();
  }

  getComments(groupId: number) {
    return this.http.get(`http://localhost:3000/posts/group/${groupId}`, {
      withCredentials: true
    });
  }

  follow(groupId: number) {
    this.http.post('http://localhost:3000/groups/createparticipant', {
      groupId: groupId
    }, {
      withCredentials: true
    }).subscribe();
  }

  unfollow(groupId: number) {
    this.http.delete(`http://localhost:3000/groups/removeparticipant/${groupId}`, {
      withCredentials: true,
  }).subscribe();
  }


  constructor(
    private http: HttpClient,
  ) {  }
}
