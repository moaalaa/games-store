import { Injectable } from '@angular/core';
import { User } from '../Contracts/User';
import { USERS } from '../fake-data/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = USERS;

  constructor() { }

  login(email: string): User|undefined {
    const user = this.users.find((user: User) => user.email === email);

    localStorage.setItem('auth', JSON.stringify(user != undefined ? user : {}));

    return user;
  }

  isAuth(): boolean {
    const auth = this.user();

    if (auth == undefined || auth == null) return false;
    if (Object.keys(auth).length === 0) return false;
    
    return true;
  }

  user(): User|undefined {
    return JSON.parse((localStorage.getItem('auth') as string));
  }
}
