/*
  The most basic entity in which everything else derives from.
*/
export abstract class Duct {

  //General properties
  _width: number;
  _height: number;
  _length: number;
  _isFireRated: boolean;
  _isInsulated: boolean;
  _isTDF: boolean;

  //WebGL properties
  _material: any;
  _geometry: any;
  _mesh: any;


  constructor(width:number, height:number){
    this._width = width;
    this._height = height;
  }

  //To be implemented on the derived classes
  abstract draw(): void;

  abstract getParameters(): string[];

}


export enum FlatSide {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

export enum Direction {
  LEFT,
  RIGHT,
  UP,
  DOWN,
}
