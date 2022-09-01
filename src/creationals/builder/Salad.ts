import { Dish } from "./Dish";

export class Salad implements Dish {
  getDish(): string {
    return "Salad";
  }
}
