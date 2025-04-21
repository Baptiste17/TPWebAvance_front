export class Onduleur {
  id?: Number;
  status: boolean;
  power: Number;
  model: string;
  pieceId: Number;

  constructor(id: number, state: boolean, power: number, name: string, pieceId: Number) {
    this.id = id;
    this.status = state;
    this.power = power;
    this.model = name;
    this.pieceId = pieceId;
  }
}
