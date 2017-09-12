import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the Design page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class Design {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Design');
  }

}
