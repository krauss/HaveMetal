/*
  The most basic entity in which everything else derives from.
*/
export abstract class Duct{

  private _x: number;
  private _y: number;
  private _z: number;
  private _isFireRated: boolean;
  private _isInsulated: boolean;
  private _isTDF: boolean;

  constructor(){

  }

  //To be implemented on the derived classes
  abstract draw(): void;

  /*
    Duct width accessors
  */
  get getX(): number {
    return this._x;
  }

  set setX(n : number){
    this._x = n;
  }

  /*
    Duct height accessors
  */
  get getY(): number {
    return this._y;
  }

  set setY(n : number){
    this._y = n;
  }

  /*
    Duct length accessors
  */
  get getZ(): number {
    return this._z;
  }

  set setZ(n : number){
    this._z = n;
  }

  /*
    Duct fireRated property accessors
  */
  get fireRated(): boolean {
    return this._isFireRated;
  }

  set fireRated(o : boolean){
    this._isFireRated = o;
  }

  /*
    Duct insulation property accessors
  */
  get insulated(): boolean {
    return this._isInsulated;
  }

  set insulated(o : boolean){
    this._isInsulated = o;
  }

  /*
    Duct TDF property accessors
  */
  get tdf(): boolean {
    return this._isTDF;
  }

  set tdf(o : boolean){
    this._isTDF = o;
  }

}
