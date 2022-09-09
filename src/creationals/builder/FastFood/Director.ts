import { Burger } from "./Burger";
import { BurgerBuilder } from "./BurgerBuilder";

export class Director {
  burgerBuilder: BurgerBuilder;

  setBurgerbuilder(builder: BurgerBuilder) {
    this.burgerBuilder = builder;
  }

  buildBurger(): Burger {
    this.burgerBuilder.setBread("Corn").setMeat("Beef").setSauce("Ketchup");

    return this.burgerBuilder.build();
  }
}

const director = new Director();
const burgerBuilder = new BurgerBuilder();

director.setBurgerbuilder(burgerBuilder);
console.log(director.buildBurger());
