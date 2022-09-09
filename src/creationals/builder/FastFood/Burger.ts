export class Burger {
  constructor(
    private bread: string,
    private meat: string,
    private sauce: string
  ) {}

  getBread(): string {
    return this.bread;
  }

  getMeat(): string {
    return this.meat;
  }

  getSauce() {
    return this.sauce;
  }
}
