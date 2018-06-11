import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from 'ionic-angular';

import * as THREE from 'three';
import { TYPES }  from '../../models/interfaces/duct.properties';
import { Duct }  from '../../models/interfaces/duct.interface';
import { DuctFactory } from '../../models/objects/factory';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})

export class PopoverComponent {


  @ViewChild('fuckList') something;

  type_list = TYPES;
  dtype: any;
  protected static duct: Duct;
  protected static _scene: any;

  constructor( private navParams: NavParams ) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      PopoverComponent._scene = this.navParams.data.scene;

      //this.setPreviousSelected();
      // this.background = this.getColorName(this.contentEle.style.backgroundColor);
      //this.duct.color = this.getColorName(this.duct.color);
      //console.log(this._duct.geometry.name);
      // this.setFontFamily();
      //this.setDuctType();
    }
  }


  setPreviousSelected(){
    console.log(this.dtype);
  }

  //TODO implement the method to change the type of the duct
  // setDuctType(){
  //   if (this.duct.type) {
  //     //TODO
  //     this.type_list = this.duct.type;
  //   }
  // }

  changeBackground(color: any) {
    PopoverComponent.duct._material.color = new THREE.Color(color);
  }


  changeDuctType($event) {

    if ($event) {

      console.log(this.dtype);

      if (PopoverComponent.duct != undefined){

        var tmp = PopoverComponent._scene.getObjectByName(PopoverComponent.duct._mesh.name);
        PopoverComponent._scene.remove(tmp);

      }

      PopoverComponent.duct = DuctFactory.createDuct($event);
      PopoverComponent.duct.draw();
      PopoverComponent._scene.add( PopoverComponent.duct._mesh );

    }
  }


}
