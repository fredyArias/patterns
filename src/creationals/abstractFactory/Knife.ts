import { CuttingTool } from "./CuttingTool";

export class Knife implements CuttingTool {
  cut(): string {
    return "Knife";
  }
}
