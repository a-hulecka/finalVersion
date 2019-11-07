import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access: boolean = false;
  key: string = 'USER';

  constructor() { }

  register(value: any) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  checkUser(value) {
    const savedUser = JSON.parse(localStorage.getItem(this.key));
    if (savedUser.email === value.email && savedUser.password === value.password) {
      alert('hurra!');
      this.access = true;
    } else {
      alert('bad user or password')
    }
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.key));
  }

}
