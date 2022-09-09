interface Product {}

class Creator {
  factoryMethod() {}

  anOperation() {}
}

class ConcreteCreator extends Creator {
  factoryMethod() {}
}

export class ConcreteProduct implements Product {}
