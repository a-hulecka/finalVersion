import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access: boolean = false;
  key: string = 'USER';
  db: Dexie;

  constructor() {
    this.db = new Dexie("users_db");
    this.db.version(1).stores({
      users: 'email,password'
    });
  }

  register(value: any) {
    this.db['users'].put(value)
      .then((dbValue) => {
        return this.db['users'].get(dbValue);
      })
      .then((user) => {
        console.log('added', user);
      })
  }

  checkUser(value) {
    this.db['users'].get(value.email)
      .then((dbUser) => {
        if (dbUser.email === value.email && dbUser.password === value.password) {
          this.access = true;
        } else {
          alert('bad user or password')
          this.access = false;
        }
      })
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.key));
  }

}
