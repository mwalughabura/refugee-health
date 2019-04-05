import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Records',
      url: '/reports',
      icon: 'book'
    },
    {
      title: 'Appointments',
      url: '/appointments',
      icon: 'calendar'
    },
    {
      title: 'First Aids',
      url: '/appointments',
      icon: 'medkit'
    },
    {
      title: 'Log Out',
      url: '/home',
      icon: 'log-out'
    }
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
