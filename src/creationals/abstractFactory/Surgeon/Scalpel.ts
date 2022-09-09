import { CuttingTool } from "./CuttingTool";

export class Scalpel implements CuttingTool {
  cut(): string {
    return "Scalpel";
  }
}
