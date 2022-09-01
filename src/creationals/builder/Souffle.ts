import { Dish } from "./Dish";

export class Souffle implements Dish {
  getDish(): string {
    return "Souffle";
  }
}
