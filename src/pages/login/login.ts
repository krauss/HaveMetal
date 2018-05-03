import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';
import { User } from '../../models/interfaces/user.interface';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.passwd);
      if(result){

        //Show the loader to give the impression of authentication
        this.loadingCtrl.create({
          content: "Please wait...",
          duration: 1200
        }).present().then(() => {

          //Take the user to the home page
          this.navCtrl.push(TabsPage);

        });
      }
    } catch (e){
      console.error(e);
    }
  }



  signin(){
    this.navCtrl.push('SignInPage');
  }

}
