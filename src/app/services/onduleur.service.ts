import {Injectable} from '@angular/core';
import {Onduleur} from '../models/onduleur';
import {ApiService} from './api.service';
import {Piece} from '../models/piece';

@Injectable({
  providedIn: 'root'
})
export class OnduleurService {

  private onduleurs: Onduleur[] = [];
  private pieces: Piece[] = [];

  constructor(private api: ApiService) {
    this.refreshOnduleurs();
    this.refreshPieces();
  }

  getOnduleurs(): Onduleur[] {
    return this.onduleurs;
  }

  getPieces(): Piece[] {
    return this.pieces;
  }

  refreshOnduleurs(): void {
    this.api.getOnduleurs().then((onduleurs: any) => this.onduleurs = onduleurs);
  }

  refreshPieces(): void {
    this.api.getPieces().then((pieces: any) => this.pieces = pieces);
  }

  addOnduleur(name: string, power: Number, state: boolean, pieceId: Number): void {
    this.api.addOnduleur({"model": name, "status": state, "power" : power, "pieceId": pieceId})
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshOnduleurs());
  }

  removeOnduleur(onduleur: Onduleur) {
    this.api.removeOnduleur(onduleur)
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshOnduleurs());
  }

  invertState(id: Number) {
    let onduleurToUpdate = this.onduleurs
      .filter(onduleur => onduleur.id === id)[0];
    onduleurToUpdate.status = !onduleurToUpdate.status;
    this.api.updateOnduleur(onduleurToUpdate)
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshOnduleurs());
  }
}
