import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  sendForm(form) {
    if (form.valid) {
      this.auth.checkUser(form.value);
    } else {
      console.warn('form invalid');
    }
  }

  ngOnInit() {
  }

}
