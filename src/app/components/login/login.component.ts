import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
      ]),
    });
  }

  get email() {
    return this.loginForm.get('username');
  }

  get pw() {
    return this.loginForm.get('password');
  }

  onSubmit = () => {
    if (this.loginForm.valid) {
      this.userService
        .handleLogin('http://localhost:8080/api/user/login', {
          username: this.email!.value,
          password: this.pw!.value,
        })
        .subscribe((res) => {
          if (res) {
            this.authService.handleLogIn(res.data!.id);
            this.router.navigateByUrl('/home');
          }
        });
    } else {
      alert('Failed to login');
    }
  };
}
