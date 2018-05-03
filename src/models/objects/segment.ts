import { Duct } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Segment extends Duct {

  draw(): void {
    //alert("It's a segment");
    //this.geometry(new THREE.BoxGeometry( 6, 6, 6 ));
    this._geometry = new THREE.BoxGeometry( 6, 6, 6 );
    this._geometry.name = "segment";
    //this.material(new THREE.MeshPhongMaterial( {color: 0x0000ff} ));
    this._material = new THREE.MeshPhongMaterial( {color: 0x0000ff, shininess: 50} );
    //this.mesh(new THREE.Mesh( this.geometry(), this.material() ));
    this._mesh = new THREE.Mesh( this._geometry, this._material );

  }

}
