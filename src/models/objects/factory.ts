import { Duct } from '../interfaces/duct.interface';
import { FlatSide } from '../interfaces/duct.interface';
import { Direction } from '../interfaces/duct.interface';
import { Segment } from './segment';
import { Reduction } from './reduction';
import { Transiction } from './transiction';
import { Offset } from './offset';
import { Cap } from './cap';


// ductfactory.ts
export class DuctFactory {

  public static createDuct(duct_type): Duct {

    switch(duct_type){
      case "Segment": return new Segment(7, 4);
      case "Reduction": return new Reduction(8, 3, 8, 2, FlatSide.TOP);
      case "Transiction": return new Transiction(8, 5, 5, 3, 'RIGHT');
      case "Offset": return new Offset(8, 3, 1.5, Direction.UP);
      case "Cap": return new Cap(7, 4);
    }
  }

}
