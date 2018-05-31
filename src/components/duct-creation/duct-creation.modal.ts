import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { TYPES, SIZES }  from '../../models/interfaces/duct.properties';

/**
 * Generated class for the DuctCreationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'duct-creation',
  templateUrl: 'duct-creation.modal.html'
})
export class DuctCreationComponent {

  type_list = TYPES;
  size_list = SIZES;

  constructor(public viewCtrl: ViewController, params: NavParams) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
