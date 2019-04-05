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
      title: 'Chat',
      url: '/chat',
      icon: 'chatboxes'
    },
    {
      title: 'First Aids',
      url: '/list',
      icon: 'medkit'
    },
    {
      title: 'Location',
      url: '/maps',
      icon: 'maps'
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
