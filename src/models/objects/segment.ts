import { Duct } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Segment extends Duct {

  constructor(w:number, h:number) {
    super(w, h);
    this._length = 14; //default measurement for a single duct segment
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


  setWidth(): void {
    if(this._width >= 1){
      this._geometry.vertices[1].x = this._width;
      this._geometry.vertices[4].x = this._width;
      this._geometry.vertices[6].x = this._width;
      this._geometry.vertices[7].x = this._width;
      this._geometry.verticesNeedUpdate = true;
    }
  }

  setHeigth(): void {
    if(this._height >= 1){
      this._geometry.vertices[3].y = this._height;
      this._geometry.vertices[4].y = this._height;
      this._geometry.vertices[5].y = this._height;
      this._geometry.vertices[6].y = this._height;
      this._geometry.verticesNeedUpdate = true;
    }
  }

  setLength(): void {
    if(this._length >= 1){
      this._geometry.vertices[2].z = this._length;
      this._geometry.vertices[5].z = this._length;
      this._geometry.vertices[6].z = this._length;
      this._geometry.vertices[7].z = this._length;
      this._geometry.verticesNeedUpdate = true;
    }
  }

}
