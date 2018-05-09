import { Duct } from '../interfaces/duct.interface';
import { Segment } from './segment';
import { Reduction } from './reduction';
import { Transiction } from './transiction';


// ductfactory.ts
export class DuctFactory {

  public static createDuct(duct_type): Duct {

    switch(duct_type){
      case "Segment": return new Segment();
      case "Reduction": return new Reduction();
      case "Transiction": return new Transiction();
    }
  }

}
