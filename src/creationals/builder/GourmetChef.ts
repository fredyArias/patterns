import { Chef } from "./Chef";
import { Oyster } from "./Oyster";
import { Sirloin } from "./Sirloin";
import { Souffle } from "./Souffle";

export class GourmetChef implements Chef {
  prepareStarter() {
    return new Oyster();
  }

  prepareMainCourse() {
    return new Sirloin();
  }

  prepareDessert() {
    return new Souffle();
  }
}
