import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  error = false;

  constructor(private registerService: RegisterService, private route: Router) { }

  doRegister() {
    this.registerService.doRegister(this.email, this.password).subscribe(() => {
      this.route.navigate(['']);
    }, (err) => {
      this.error = true;
    });


  }

  ngOnInit() {
  }

}
