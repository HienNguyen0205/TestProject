import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, this.verifyUsername]),
      password: new FormControl('', [Validators.required, this.verifyPw]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get pw() {
    return this.loginForm.get('password');
  }

  verifyUsername = (control: AbstractControl): ValidationErrors | null => {
    const isFalse = control.value != 'test';
    return isFalse ? { rightUsername: { value: control.value } } : null;
  };

  verifyPw = (control: AbstractControl): ValidationErrors | null => {
    const isFalse = control.value != 'test';
    return isFalse ? { rightPw: { value: control.value } } : null;
  };

  onSubmit = () => {
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/home')
    }else{
      alert("Failed to login")
    }
  };
}
