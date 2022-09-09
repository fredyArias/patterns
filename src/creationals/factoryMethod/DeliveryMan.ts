class DeliveryMan {
  getVehicle() {}
  deliver() {}
}

class CyclistDeliveryMan extends DeliveryMan {
  getVehicle() {
    return new Bicycle();
  }
}

class MotorcycleDeliveryMan extends DeliveryMan {
  getVehicle() {
    return new Motorcycle();
  }
}

interface Vehicle {}

class Bicycle implements Vehicle {}

class Motorcycle implements Vehicle {}
