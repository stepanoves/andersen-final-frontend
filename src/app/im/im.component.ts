import { Component, OnInit } from '@angular/core';
import {ImService} from './im.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.css'],
  providers: [ImService, AuthService]
})
export class ImComponent implements OnInit {
  name: string;
  surname: string;
  specialization: string;
  position: string;
  resumeLink: string;
  loggedIn;

  isEditable = false;

  constructor(private imService: ImService, private router: Router) {

    this.imService.getInfo().subscribe((resp: any) => {
      if (resp.info !== null) {
        this.name = resp.info.name;
        this.surname = resp.info.surname;
        this.specialization = resp.info.specialization;
        this.position = resp.info.position;
        this.resumeLink = resp.info.resumeLink;
      } else {
        router.navigate(['/addinfo']);
      }
    });
  }

  editInfo() {
    if (!this.isEditable) {
      this.isEditable = true;
    } else {
      this.imService.updateInfo(this.name, this.surname, this.position, this.specialization, this.resumeLink);
      this.isEditable = false;
    }
  }

  ngOnInit() {
  }

}
