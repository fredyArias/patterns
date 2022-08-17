import { CuttingTool } from "./CuttingTool";
import { DryingTool } from "./DryingTool";
import { Instrumentalist } from "./Instrumentalist";
import { Knife } from "./Knife";
import { Rag } from "./Rag";

export class InstrumentalistInJungle implements Instrumentalist {
  createCuttingTool(): CuttingTool {
    return new Knife();
  }

  createDryingTool(): DryingTool {
    return new Rag();
  }
}
