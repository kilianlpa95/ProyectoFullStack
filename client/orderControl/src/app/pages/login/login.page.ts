import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Login } from '../../models/login';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  user: Login;
  validationMessages = {
    usernameLogin: [
      { type: 'required', message: 'Username is required.' }
    ],
    passwordLogin: [
      { type: 'required', message: 'Password is required.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.loginForm = this.formBuilder.group({
      usernameLogin: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      passwordLogin: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ]))
    });
  }

  login(values) {
    this.user = {
      user_name: values.usernameLogin,
      user_password: values.passwordLogin
    };

    this.apiService.login(this.user.user_name, this.user.user_password, this.user).subscribe(
      data => {
        this.user = data['data'];
        this.toast.create({
          message: 'Logged',
          duration: 1000
        }).then((toastData) => {
          toastData.present();
        });
        this.router.navigate(['/home']);
      }, (error) => {
        console.log("error")
        this.toast.create({
          message: 'Usuario o contraseña incorrectos',
          duration: 3000
        }).then((toastData) => {
          toastData.present();
        });
        console.error(error);
      }
    );
  }
}
