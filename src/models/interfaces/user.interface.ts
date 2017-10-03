/*
  Abstract class that represent a user within the system.
*/
export abstract class User{

  private _id: number;
  private _name: string;
  private _email: string;
  private _passwd: string;
  private _role: string;

  abstract set policies(p : any);

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

  get email():string {
    return this._email;
  }

  set email(n : string){
    this._email = n;
  }

  get passwd():string {
    return this._passwd;
  }

  set passwd(n : string){
    this._passwd = n;
  }

  get role():string {
    return this._role;
  }

  set role(r : string){
    this._role = r;
  }
}
