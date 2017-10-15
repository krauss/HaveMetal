import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { User } from '../../models/interfaces/user.interface';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {} as User

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  async register(user: User){
    try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.passwd);
        if(result){
          this.toast.create({
            message: 'User added successfully',
            duration: 1500,
            position: 'bottom'
          }).present();
        }
    } catch (e) {
      console.error(e);
    }

  }

}
