import { Component } from '@angular/core';
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

  type_list = TYPES;
  protected static duct: Duct;
  protected static _scene: any;

  constructor( private navParams: NavParams ) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      PopoverComponent._scene = this.navParams.data.scene;

      // this.background = this.getColorName(this.contentEle.style.backgroundColor);
      //this.duct.color = this.getColorName(this.duct.color);
      //console.log(this._duct.geometry.name);
      // this.setFontFamily();
      //this.setDuctType();
    }
  }

  //This method is going to get the duct's color
  // getColorName(background: any) {
  //   let colorName = 'white';
  //
  //   if (!background) return 'white';
  //
  //   for (var key in this.colors) {
  //     if (this.colors[key].bg === background) {
  //       colorName = key;
  //     }
  //   }
  //
  //   return colorName;
  // }

  //TODO implement the method to change the type of the duct
  // setDuctType(){
  //   if (this.duct.type) {
  //     //TODO
  //     this.type_list = this.duct.type;
  //   }
  // }

  changeBackground(color: any) {
    PopoverComponent.duct.material.color = new THREE.Color(color);
  }


  changeDuctType($event) {

    if ($event) {

      if (PopoverComponent.duct != undefined){

        var tmp = PopoverComponent._scene.getObjectByName(PopoverComponent.duct.mesh.name);
        PopoverComponent._scene.remove(tmp);

      }

      //console.log(PopoverComponent.duct);

      PopoverComponent.duct = DuctFactory.createDuct($event);
      PopoverComponent.duct.draw();
      PopoverComponent._scene.add( PopoverComponent.duct.mesh );

    }
  }


}
