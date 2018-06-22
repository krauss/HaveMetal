import { Duct } from '../interfaces/duct.interface';
import { Direction } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Offset extends Duct {

  protected _offset;
  protected _direct;

  constructor(w:number, h:number, os:number, direct:Direction){
    super(w, h);
    this._direct = direct;
    this._length = 5; //default lenght for a single offset piece
    this._offset = os;
  }

  draw(): void {

  	this._geometry = new THREE.Geometry();

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


    //add the reduction difference on the width or height, depending on the parameters
    switch(this._direct){
      case Direction.UP:
        this._geometry.vertices[5].y += this._offset;
        this._geometry.vertices[6].y += this._offset;
        this._geometry.vertices[2].y += this._offset;
        this._geometry.vertices[7].y += this._offset;
        break;
      case Direction.DOWN:
        this._geometry.vertices[5].y -= this._offset;
        this._geometry.vertices[6].y -= this._offset;
        this._geometry.vertices[2].y -= this._offset;
        this._geometry.vertices[7].y -= this._offset;
        break;
      case Direction.LEFT:
        this._geometry.vertices[5].x -= this._offset;
        this._geometry.vertices[6].x -= this._offset;
        this._geometry.vertices[2].x -= this._offset;
        this._geometry.vertices[7].x -= this._offset;
        break;
      default:
        this._geometry.vertices[5].x += this._offset;
        this._geometry.vertices[6].x += this._offset;
        this._geometry.vertices[2].x += this._offset;
        this._geometry.vertices[7].x += this._offset;
        break;
    };

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
    this._mesh.name = "offset";

  }


}
