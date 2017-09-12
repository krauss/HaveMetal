import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  responseData: any;
  userData = { "username": "", "password": "" }

  constructor(public navCtrl: NavController, public authService: AuthService, private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  home() {
    //Api connections
    if (this.userData.username && this.userData.password) {
      this.authService.postData(this.userData, "login").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData.userData) {
          localStorage.setItem('userData', JSON.stringify(this.responseData))
          this.navCtrl.push(HomePage);
        }
        else{
          this.presentToast("Please give a valid username and password.");
        }

      }, (err) => {
        //connection fail message
      });
    } else {
      this.presentToast("Please fill all details.");
    }

  }

  presentToast(msg) {
    let toast = this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
