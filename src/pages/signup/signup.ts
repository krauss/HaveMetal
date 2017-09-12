import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
import { Login } from '../login/login';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  responseData: any;
  userData = { "username": "", "password": "", "email": "", "name": "" }

  constructor(public navCtrl: NavController, public authService: AuthService, private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  signup() {
    if (this.userData.username && this.userData.password && this.userData.email && this.userData.name) {
      //Api connections
      this.authService.postData(this.userData, "signup").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData))
        this.navCtrl.push(HomePage);
      }, (err) => {
        //connection fail message
      });
    } else {
      this.presentToast("Give all the user details");
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

  login() {
    this.navCtrl.push(Login);
  }
}
