import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
    username: [
      { type: 'required', message: 'Username is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ]))
    });
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(['/home']);
  }
}
