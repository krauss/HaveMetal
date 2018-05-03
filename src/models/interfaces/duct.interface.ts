/*
  The most basic entity in which everything else derives from.
*/
export abstract class Duct {

  //General properties
  protected _width: number;
  protected _height: number;
  protected _length: number;
  protected _isFireRated: boolean;
  protected _isInsulated: boolean;
  protected _isTDF: boolean;

  //WebGL properties
  protected _material: any;
  protected _geometry: any;
  protected _mesh: any;


  constructor(){}

  //To be implemented on the derived classes
  abstract draw(): void;

  /*
    Duct width accessors
  */
  get width(): number {
    return this.width;
  }

  set width(n : number){
    this._width = n;
  }

  /*
    Duct height accessors
  */
  get height(): number {
    return this._height;
  }

  set height(n : number){
    this._height = n;
  }

  /*
    Duct length accessors
  */
  get length(): number {
    return this._length;
  }

  set length(n : number){
    this._length = n;
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

  set tdf(t : boolean){
    this._isTDF = t;
  }

  /*
    WebGL accessor methods
  */
  get material(): any {
    return this._material;
  }

  set material(m: any) {
    this._material = m;
  }

  get geometry(): any {
    return this._geometry;
  }

  set geometry(g: any) {
    this._geometry = g;
  }

  get mesh(): any {
    return this._mesh;
  }

  set mesh(m: any) {
    this._mesh = m;
  }

}
