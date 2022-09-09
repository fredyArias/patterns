import { BasicChef } from "./BasicChef";
import { Chef } from "./Chef";
import { GourmetChef } from "./GourmetChef";

class Person {
  eat(chef: Chef) {
    const prepareStarter = chef.prepareStarter();
    const prepareMainCourse = chef.prepareMainCourse();
    const prepareDessert = chef.prepareDessert();

    return console.log(
      `Today i eat: 
        Starter: ${prepareStarter.getDish()}, 
        Main course: ${prepareMainCourse.getDish()},
        Dessert: ${prepareDessert.getDish()}`
    );
  }
}

const basicChef = new BasicChef();
const gourmetChef = new GourmetChef();
const person = new Person();

person.eat(basicChef);
console.log("----");
person.eat(gourmetChef);
