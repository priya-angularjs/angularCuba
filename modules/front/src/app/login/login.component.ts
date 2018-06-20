import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../restServices/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      appUrl: ['http://localhost:8080/app/rest/']
    });
  }
  login(model: FormGroup) {
    console.log(model.value);
    this.loginService.login(model.value.appUrl, model.value.login, model.value.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(() => {
        alert('Login error');
      });
  }
  }


