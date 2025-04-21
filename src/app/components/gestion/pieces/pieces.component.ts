import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {OnduleurComponent} from '../onduleur/onduleur.component';
import {PieceService} from '../../../services/piece.service';
import {Piece} from '../../../models/piece';
import {Onduleur} from '../../../models/onduleur';
import {PieceComponent} from '../piece/piece.component';

@Component({
  selector: 'app-pieces',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    PieceComponent
  ],
  templateUrl: './pieces.component.html',
  styleUrl: './pieces.component.css'
})
export class PiecesComponent {
  constructor(private pieceService: PieceService) { }

  getPieces(): Piece[] {
    return this.pieceService.getPieces();
  }
  newPiece = {
    name: '',

  };
  onSubmit() {

    this.pieceService.addPiece(this.newPiece.name);
    // Reset le formulaire après soumission
    this.newPiece = { name: ''};
  }

  removePiece(piece: Piece) {
    this.pieceService.removePiece(piece);
  }

  updatePiece(piece: Piece) {
    this.pieceService.updatePiece(piece);
  }
}
