import { Burger } from "./Burger";

export class BurgerBuilder {
  private bread: string;
  private meat: string;
  private sauce: string;

  constructor() {
    this.bread = "Pan";
    this.meat = "Normal";
    this.sauce = "N/A";
  }

  build(): Burger {
    return new Burger(this.bread, this.meat, this.sauce);
  }

  setBread(bread: string): BurgerBuilder {
    this.bread = bread;
    return this;
  }

  setMeat(meat: string = "Beef"): BurgerBuilder {
    this.meat = meat;
    return this;
  }

  setSauce(sauce: string): BurgerBuilder {
    this.sauce = sauce;
    return this;
  }
}
