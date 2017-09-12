import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userDetails : any;

  constructor(public navCtrl: NavController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
  }

  tabspage(){
    this.navCtrl.push(TabsPage);
  }
}
