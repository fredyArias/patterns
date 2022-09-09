class Client {}

interface AbstractFactory {
  createProductA();
  createProductB();
}

class ConcreteFactoy implements AbstractFactory {
  createProductA() {}
  createProductB() {}
}

interface AbstractProduct {}

class ConcreteProduct implements AbstractProduct {}
