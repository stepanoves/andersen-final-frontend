import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {GroupService} from './group.service';
import {isEmbeddedView} from "@angular/core/src/view/util";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupService]
})
export class GroupComponent implements OnInit {
  title: string;
  participant = false;
  main = false;
  comments;
  text = '';

  constructor(private route: ActivatedRoute, private groupService: GroupService) {
    groupService.getGroup(this.route.params._value.id).subscribe((resp: any) => {
      console.log(resp);
      this.title = resp['group']['title'];
      this.participant = resp.rights.participant;
      this.main = resp.rights.main;
    });

    this.groupService.getComments(this.route.params._value.id)._subscribe((resp) => {
      const {body} = resp;
      this.comments = body.posts;
    });

  }

  follow() {
    this.groupService.follow(this.route.params._value.id);
    this.participant = true;
  }

  unfollow() {
    this.groupService.unfollow(this.route.params._value.id);
    this.participant = false;
  }

  addComment() {
    console.log(this.route.params._value.id + ' ' + this.text)
    this.groupService.addComment(this.route.params._value.id, this.text);
    this.groupService.getComments(this.route.params._value.id)._subscribe((resp) => {
      const {body} = resp;
      this.comments = body.posts;
    });
  }
  ngOnInit() {
  }

}
