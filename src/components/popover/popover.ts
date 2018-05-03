import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import * as THREE from 'three';

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

  duct: any;
  dtype: string;

  colors: any = {
    'green': {
      'bg': 'rgb(0, 255, 0)',
      'fg': 'rgb(0, 0, 0)'
    },
    'blue': {
      'bg': 'rgb(0, 0, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(0, 0, 0)'
    },
  };

  protected _duct: any;

  constructor( private navParams: NavParams ) {

  }


  ngOnInit() {
    if (this.navParams.data) {
      this._duct = this.navParams.data.duct;

      // this.background = this.getColorName(this.contentEle.style.backgroundColor);
      //this.duct.color = this.getColorName(this.duct.color);
      console.log(this._duct.geometry.name);
      // this.setFontFamily();
      //this.setDuctType();
    }
  }

  //This method is going to get the duct's color
  getColorName(background: any) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg === background) {
        colorName = key;
      }
    }

    return colorName;
  }

  //TODO implement the method to change the type of the duct
  setDuctType(){
    if (this.duct.type) {
      //TODO
      this.dtype = this.duct.type;
    }
  }
  // setFontFamily() {
  //   if (this.textEle.style.fontFamily) {
  //     this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, '');
  //   }
  // }

  changeBackground(color: any) {
    this._duct.material.color = new THREE.Color(color);
  }

  changeDuctType() {
    if (this.dtype) {
      this.duct.type = this.dtype;
    }
  }
  // changeFontFamily() {
  //   if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  // }


}
