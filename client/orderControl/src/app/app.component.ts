import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
<<<<<<< HEAD
=======

>>>>>>> 7f04554009c22a8b86847f31902c56c984627017
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /*{
      title: 'List',
      url: '/list',
      icon: 'list'
    },*/
    {
      title: 'Local',
      url: '/local',
      icon: 'list'
    },
    /*{
      title: 'Login',
      url: '/login',
      icon: 'list'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'list'
    },*/
    {
      title: 'Products',
      url: '/product',
      icon: 'list'
    },
    /*{
      title: 'Create product',
      url: '/create-products',
      icon: 'list'
    },*/
    {
      title: 'Ingredients',
      url: '/ingredient',
      icon: 'list'
    },
    /*{
      title: 'Create ingredient',
      url: '/create-ingredient',
      icon: 'list'
    },
    {
      title: 'Order',
      url: '/order',
      icon: 'list'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
