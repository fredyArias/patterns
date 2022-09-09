import { Dish } from "./Dish";

export interface Chef {
  prepareStarter(): Dish;
  prepareMainCourse(): Dish;
  prepareDessert(): Dish;
}
