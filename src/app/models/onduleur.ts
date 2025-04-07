export class Onduleur {
  id?: Number;
  state: boolean;
  power: Number;
  name: string;

  constructor(id: number, state: boolean, power: number, name: string) {
    this.id = id;
    this.state = state;
    this.power = power;
    this.name = name;
  }
}
