import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  
  isLoggedIn$ = this.loggedIn.asObservable();
  private userData = new BehaviorSubject<string | null>(null);
  userData$ = this.userData.asObservable();
  
  constructor() { }
  
  login(user: string) {
    this.loggedIn.next(true);
    this.userData.next(user);
    localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en el almacenamiento local
  }

  logout() {
    this.loggedIn.next(false);
    this.userData.next(null);
    localStorage.removeItem('user'); // Elimina el usuario del almacenamiento local
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getUserData() {
    return this.userData.asObservable();
  }
  signIn(user: any) {
    this.loggedIn.next(true);
    this.userData.next(user);
    localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en el almacenamiento local
  }
  checkLoginStatus() {
    const user = localStorage.getItem('user');
    this.loggedIn.next(!!user);
  }
  getHistory(): any[] {
    const history = localStorage.getItem('purchaseHistory');
    return history ? JSON.parse(history) : [];
  }
}
