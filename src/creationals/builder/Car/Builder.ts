export interface Builder {
  reset(): void;
  setSeats(number): void;
  setEngine(engine): void;
  setTripComputer(): void;
  setGPS(): void;
}
