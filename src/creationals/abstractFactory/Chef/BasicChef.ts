import { Chef } from "./Chef";
import { Salad } from "./Salad";
import { Chicken } from "./Chicken";
import { Custard } from "./Custard";

export class BasicChef implements Chef {
  prepareStarter() {
    return new Salad();
  }

  prepareMainCourse() {
    return new Chicken();
  }

  prepareDessert() {
    return new Custard();
  }
}
