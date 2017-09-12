import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Manual page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class Manual {
  public responseData: any;
  public dataSet: any;
  userPostData = {"user_id":"","token":"","search_word":""};
  
  constructor(public navCtrl: NavController, public app : App, public authService: AuthService) {
    const data = JSON.parse (localStorage.getItem('userData'));
    this.userPostData.user_id = data.userData.user_id;
    this.userPostData.token = data.userData.token;

    //this.getFeed();
    this.getManual();
  }

  getManual(){
    //Api connections
    this.authService.postData(this.userPostData, "manual").then((result) => {
      this.responseData = result;
      if(this.responseData.manualData){
        this.dataSet = this.responseData.manualData;
      }
      else {
        console.log("No Access");
      }
    }, (err) => {
      //connection fail message
    });
  }

  getFeed(){
    //Api connections
      this.authService.postData(this.userPostData, "feed").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if(this.responseData.feedData){
          this.dataSet = this.responseData.feedData;
        }
        else {
          console.log("No Access");
        }
      }, (err) => {
        //connection fail message
      });
  }

  convertTime(time){
    let a = new Date(time*1000);
    return a;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Manual');
  }

}
