/*
  Abstract class that represent a user within the system.
*/
export class Job{

  private _id: number;
  private _name: string;
  private _address: string;


  get id():number{
    return this._id;
  }

  set id(i: number){
    this._id = i;
  }

  get name():string {
    return this._name;
  }

  set name(n : string){
    this._name = n;
  }

  get address():string {
    return this._address;
  }

  set address(n : string){
    this._address = n;
  }

}
