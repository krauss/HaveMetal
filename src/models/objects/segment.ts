import { Duct } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Segment extends Duct {

  constructor(w:number, h:number){
    super(w, h);
    this._length = 11; //default measurement for a single duct segment 
  }

  draw(): void {

    //It crates the geometry
  	this._geometry = new THREE.Geometry();
  	this._geometry.vertices.push(
  		new THREE.Vector3( 0, 0, 0 ), //Vertex 0
  		new THREE.Vector3( this._width, 0, 0 ), //Vertex 1
  		new THREE.Vector3( 0, 0, this._length ), //Vertex 2
  		new THREE.Vector3( 0, this._height, 0 ), //Vertex 3
  		new THREE.Vector3( this._width, this._height, 0 ),	//Vertex 4
  		new THREE.Vector3( 0, this._height, this._length ), //Vertex 5
  		new THREE.Vector3( this._width, this._height, this._length ), //Vertex 6
  		new THREE.Vector3( this._width, 0, this._length ) //Vertex 7
  	);
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

    //It crates the material
    this._material = new THREE.MeshStandardMaterial( { color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
    this._material.castShadow = true;
    this._material.receiveShadow = true;

    //It crates the mesh to join everything together
    this._mesh = new THREE.Mesh( this._geometry, this._material );
    this._mesh.name = "segment";

  }

}
