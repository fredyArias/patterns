import { Dish } from "./Dish";

export class Chicken implements Dish {
  getDish(): string {
    return "Chicken";
  }
}
