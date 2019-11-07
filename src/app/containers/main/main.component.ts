import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { getDefaultService } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  login: string;

  constructor(private auth: AuthService) {
  }

  getName() {

    this.login = this.auth.getUser().email;
    const exists = this.auth.getUser();
    this.login = exists ? exists.email : 'not exists';
  }

  ngOnInit() {
  }

}
