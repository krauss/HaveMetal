import { Duct } from '../interfaces/duct.interface';
import { FLATSIDES } from '../interfaces/duct.properties';
import * as THREE from 'three';

export class Transiction extends Duct {

  _frontWidth: number;
  _frontHeight: number;
  _flat:string;
  _horizonDiff: number = 0;
  _vertDiff: number = 0

  sides = FLATSIDES;


  constructor(backWidth:number, backHeight:number, frontWidth:number, frontHeight:number, flat:string){
    super(backWidth, backHeight);
    this._frontWidth = frontWidth;
    this._frontHeight = frontHeight;
    this._flat = flat;
    this._length = 5; //default length for a single transiction piece

    //calculate the width and height difference
    this.calcDiffHoriVert();

  }

  private calcDiffHoriVert(): void{
    this._horizonDiff = this._width - this._frontWidth;
    this._vertDiff = this._height - this._frontHeight;
  }

  draw(): void {

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
    switch(this._flat){
      case 'LEFT':
        this._horizonDiff != 0 ? this._geometry.vertices[6].x -= this._horizonDiff : null;
        this._horizonDiff != 0 ? this._geometry.vertices[7].x -= this._horizonDiff : null;
        break;
      default:
        this._horizonDiff != 0 ? this._geometry.vertices[5].x += this._horizonDiff : null;
        this._horizonDiff != 0 ? this._geometry.vertices[2].x += this._horizonDiff : null;
        break;
    };
    this._vertDiff != 0 ? this._geometry.vertices[7].y += this._vertDiff : null;
    this._vertDiff != 0 ? this._geometry.vertices[2].y += this._vertDiff : null;

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
    this._mesh.name = "transiction";

  }

  setFlatSide(): void {
    switch(this._flat){
      case 'LEFT':
        this._horizonDiff != 0 ? this._geometry.vertices[6].x -= this._horizonDiff : null;
        this._horizonDiff != 0 ? this._geometry.vertices[7].x -= this._horizonDiff : null;
        break;
      default:
        this._horizonDiff != 0 ? this._geometry.vertices[5].x += this._horizonDiff : null;
        this._horizonDiff != 0 ? this._geometry.vertices[2].x += this._horizonDiff : null;
        break;
    };
    this._vertDiff != 0 ? this._geometry.vertices[7].y += this._vertDiff : null;
    this._vertDiff != 0 ? this._geometry.vertices[2].y += this._vertDiff : null;
    this.calcDiffHoriVert();
    this._geometry.verticesNeedUpdate = true;
  }

  setBackWidth(): void {
    //In this case width is actually the backWidth
    if(this._width >= 1){
      this._geometry.vertices[1].x = this._width;
      this._geometry.vertices[4].x = this._width;
      this._geometry.verticesNeedUpdate = true;
      this.calcDiffHoriVert();
    }
  }

  setBackHeigth(): void {
    if(this._height >= 1){
      this._geometry.vertices[3].y = this._height;
      this._geometry.vertices[4].y = this._height;
      this._geometry.verticesNeedUpdate = true;
      this.calcDiffHoriVert();
    }
  }

  setFrontWidth(): void{
    if(this._frontWidth >= 1){
      this._geometry.vertices[6].x = this._frontWidth;
      this._geometry.vertices[7].x = this._frontWidth;
      this._geometry.verticesNeedUpdate = true;
      this.calcDiffHoriVert();
    }
  }

  setFrontHeigth(): void{
    if(this._frontHeight >= 1){
      this._geometry.vertices[6].y = this._frontHeight;
      this._geometry.vertices[5].y = this._frontHeight;
      this._geometry.verticesNeedUpdate = true;
      this.calcDiffHoriVert();
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
