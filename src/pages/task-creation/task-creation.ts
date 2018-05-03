import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TYPES, SIZES }  from '../../models/interfaces/duct.properties';

/**
 * Generated class for the TaskCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-creation',
  templateUrl: 'task-creation.html',
})
export class TaskCreationPage {

  type_list = TYPES;
  size_list = SIZES;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskCreationPage');

  }

  addTask(): void{
    console.log("Fuck that");
  }

}
