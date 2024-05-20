import { Injectable, OnInit, afterNextRender } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {

  isLoggedIn!: boolean;
  userId!: number;

  constructor(){
    afterNextRender(() => {
      this.isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
      this.userId = Number(localStorage.getItem('userId'));
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
    this.userId = Number(localStorage.getItem('userId'));
  }

  handleLogIn(userId: number) {
    this.isLoggedIn = true;
    this.userId = userId;
    localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
    localStorage.setItem('userId', this.userId.toString());
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.userId = -1;
    localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
    localStorage.setItem('userId', this.userId.toString());
  }

  checkLogIn = () => {
    return this.isLoggedIn;
  };

  getUserId = () => {
    return this.userId;
  };
}
