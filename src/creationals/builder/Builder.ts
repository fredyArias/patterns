class Director {
  constructor(public builder: Builder) {}

  changeBuilder(builder: Builder) {}

  make(type) {}
}

interface Builder {
  reset();
  buildStepA(): void;
  buildStepB(): void;
  buildStepC(): void;
}

class ConcreteBuilder1 implements Builder {
  private result: Product1;

  reset() {}
  buildStepA(): void {}
  buildStepB(): void {}
  buildStepC(): void {}

  getResult(): Product1 {
    return this.result;
  }
}
class ConcreteBuilder2 implements Builder {
  private result: Product2;

  reset() {}
  buildStepA(): void {}
  buildStepB(): void {}
  buildStepC(): void {}

  getResult(): Product2 {
    return this.result;
  }
}

class Product1 {}

class Product2 {}
