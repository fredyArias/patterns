import { CuttingTool } from "./CuttingTool";
import { DryingTool } from "./DryingTool";

export interface Instrumentalist {
  createCuttingTool(): CuttingTool;
  createDryingTool(): DryingTool;
}
