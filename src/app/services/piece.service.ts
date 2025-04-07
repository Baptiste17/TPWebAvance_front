import { Injectable } from '@angular/core';
import {Piece} from '../models/piece';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  private pieces: Piece[] = [];

  constructor(private api: ApiService) {
    this.refreshPieces();
  }

  getPieces(): Piece[] {
    return this.pieces;
  }

  refreshPieces(): void {
    this.api.getPieces().then((pieces: any) => this.pieces = pieces);
  }

  addPiece(name: string): void {
    this.api.addPiece({"name": name})
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshPieces());
  }

  removePiece(piece: Piece) {
    this.api.removePiece(piece)
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshPieces());
  }
}
