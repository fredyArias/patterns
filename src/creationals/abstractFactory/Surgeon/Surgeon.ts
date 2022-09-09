import { Instrumentalist } from "./Instrumentalist";
import { InstrumentalistInJungle } from "./InstrumentalistInJungle";
import { InstrumentalistInOperatingRoom } from "./InstrumentalistInOperatingRoom";

class Surgeon {
  operate(instrumentalist: Instrumentalist) {
    const cuttingTool = instrumentalist.createCuttingTool();
    const dryingTool = instrumentalist.createDryingTool();

    return console.log(
      `cut whit a ${cuttingTool.cut()} and dry with a ${dryingTool.dry()}`
    );
  }
}

const instrumentalistInJungle = new InstrumentalistInJungle();
const instrumentalistInOperatingRoom = new InstrumentalistInOperatingRoom();
const surgeon = new Surgeon();

console.log("Operate in the Jungle");
surgeon.operate(instrumentalistInJungle);
console.log("- - - - -");
console.log("Operate in the Operating room");
surgeon.operate(instrumentalistInOperatingRoom);
