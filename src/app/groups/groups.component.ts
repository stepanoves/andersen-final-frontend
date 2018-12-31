import { Component, OnInit } from '@angular/core';
import {GroupsService} from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: [GroupsService]
})
export class GroupsComponent implements OnInit {
  groups: Object;
  group: string;
  constructor(private groupService: GroupsService) {
    this.update();
  }

  addGroup() {
    this.groupService.addGroup(this.group);
  }

  update() {
    this.groupService.getGroups().subscribe(resp => {
      this.groups = resp['groups'];
    });
  }

  ngOnInit() {
  }

}
