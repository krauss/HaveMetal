import { Duct } from '../interfaces/duct.interface';
import { FlatSide } from '../interfaces/duct.interface';
import * as THREE from 'three';

export class Reduction extends Duct {

  protected _horizonDiff: number = 0;
  protected _vertDiff: number = 0;
  protected _direction: FlatSide;

  /**
  * Parameters:
  *
  * fromWidth = original width
  * fromHeight = original height
  * toWidth = changing width
  * toHeight = changing heigth
  *
  */
  constructor(fromWidth:number, fromHeight:number, toWidth:number, toHeight:number, direct:FlatSide){
    super(fromWidth, fromHeight);
    this._direction = direct;
    this._length = 5; //default lenght for a single reduction piece

    if(fromWidth === toWidth){
        this._vertDiff = fromHeight - toHeight; //adjust vertices V2 and V7 to reduz the bottom
    } else if (fromHeight === toHeight){
        this._horizonDiff = fromWidth - toWidth //adjust the vertices V6 and v7 to reduces the side
      }
    }

  draw(): void {

  	this._geometry = new THREE.Geometry();

  	this._geometry.vertices.push(
  		new THREE.Vector3( 0, 0, 0 ), //Vertex 0
  		new THREE.Vector3( this._width, 0, 0 ), //Vertex 1
  		new THREE.Vector3( 0, 0, this._length), //Vertex 2
  		new THREE.Vector3( 0, this._height, 0 ), //Vertex 3
  		new THREE.Vector3( this._width, this._height, 0 ),	//Vertex 4
  		new THREE.Vector3( 0, this._height, this._length ), //Vertex 5
  		new THREE.Vector3( this._width, this._height, this._length ), //Vertex 6
  		new THREE.Vector3( this._width, 0, this._length ) //Vertex 7
  	);

    //add the reduction difference on the width or height, depending on the parameters
    if(this._horizonDiff === 0) {

      if(this._direction.valueOf() === FlatSide.TOP){
        this._geometry.vertices[2].y += this._vertDiff;
        this._geometry.vertices[7].y += this._vertDiff;
      } else if (this._direction.valueOf() === FlatSide.BOTTOM) {
        this._geometry.vertices[5].y -= this._vertDiff;
        this._geometry.vertices[6].y -= this._vertDiff;
      }

    } else {
      if(this._direction.valueOf() === FlatSide.RIGHT){
        this._geometry.vertices[2].x += this._horizonDiff;
        this._geometry.vertices[5].x += this._horizonDiff;
      } else if(this._direction.valueOf() === FlatSide.LEFT){
        this._geometry.vertices[6].x -= this._horizonDiff;
        this._geometry.vertices[7].x -= this._horizonDiff;
      }
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
    this._mesh.name = "reduction";

  }

}
