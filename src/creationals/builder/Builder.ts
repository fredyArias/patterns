class Director {
  constructor(builder: Builder) {}
}

interface Builder {
  buildPart();
}

class ConcreteBuilder implements Builder {
  buildPart() {}

  getResult() {}
}
