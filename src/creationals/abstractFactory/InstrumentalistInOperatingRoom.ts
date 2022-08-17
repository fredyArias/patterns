import { Compress } from "./Compress";
import { CuttingTool } from "./CuttingTool";
import { DryingTool } from "./DryingTool";
import { Instrumentalist } from "./Instrumentalist";
import { Scalpel } from "./Scalpel";

export class InstrumentalistInOperatingRoom implements Instrumentalist {
  createCuttingTool(): CuttingTool {
    return new Scalpel();
  }

  createDryingTool(): DryingTool {
    return new Compress();
  }
}
