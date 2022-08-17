import { DryingTool } from "./DryingTool";

export class Compress implements DryingTool {
  dry(): string {
    return "compress";
  }
}
