import { Duct } from './duct.interface';
/*
  Abstract class that represents a user within the system.
*/
export interface Job{

  key?: string;
  name: string;
  address: string;
  creationDate: string;
  ductList?: Duct[];
}
