import { Duct } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Curve extends Duct {

  protected radialSegments = 30;
  protected innerRadius = 2;

  constructor(w:number, h:number){
    super(w, h);
    this._length = 5; //default measurement
  }

  draw(): void {

    var i;

    this._geometry = new THREE.Geometry();

    this._geometry.vertices.push(
      new THREE.Vector3( 0,           0,            0 ),            //Vertex 0
      new THREE.Vector3( this._width, 0,            0 ),            //Vertex 1
      new THREE.Vector3( this._width, 0,            this._height ), //Vertex 2
      new THREE.Vector3( 0,           0,            this._height ) //Vertex 3
    );

    //Vertex for the side 1, outter radial
    for ( i = 0; i <= this.radialSegments; i ++ ) {
        this._geometry.vertices.push(
          new THREE.Vector3( this._width, (Math.PI / i ), (Math.PI / i ) ),
        )
    }
    //Vertex for the side 1, inner radial
    for ( i = 0; i <= this.radialSegments; i ++ ) {
        this._geometry.vertices.push(
          new THREE.Vector3( this._width, i, (Math.PI * (this._height + 2) ) ),
        )
    }


    //Vertex for the side 2
    for ( i = 0; i <= this.radialSegments; i ++ ) {
        this._geometry.vertices.push(
          new THREE.Vector3( 0, i, (Math.PI * (this._height + 2) ) ),
        )
    }

    this._geometry.faces.push(
      new THREE.Face3( 0, 1, 2 ),
      new THREE.Face3( 1, 2, 7 ),
      new THREE.Face3( 1, 7, 4 ),
      new THREE.Face3( 7, 4, 6 ),
      new THREE.Face3( 3, 4, 6 ),
      new THREE.Face3( 5, 3, 6 ),
      new THREE.Face3( 2, 3, 5 ),
      new THREE.Face3( 2, 0, 3 )
    );

    this._geometry.computeFaceNormals();

    this._material = new THREE.MeshStandardMaterial( { color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
    this._material.castShadow = true;
    this._material.receiveShadow = true;

    this._mesh = new THREE.Mesh( this._geometry, this._material );
    this._mesh.name = "curve";

  }


}
