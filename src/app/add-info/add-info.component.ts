import { Component, OnInit } from '@angular/core';
import {AddInfoService} from './add-info.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css'],
  providers: [AddInfoService]
})
export class AddInfoComponent implements OnInit {
  name = '';
  surname = '';
  position = '';
  specialization = '';
  resumeLink = '';
  constructor(private addInfoService: AddInfoService, private route: Router) { }

  addInfo() {
    this.addInfoService.addInfo(this.name, this.surname, this.position, this.specialization, this.resumeLink);
    this.route.navigate(['']);
  }

  ngOnInit() {
  }

}
