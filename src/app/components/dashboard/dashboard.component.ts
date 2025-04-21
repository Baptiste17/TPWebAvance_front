import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {OnduleurService} from '../../services/onduleur.service';
import {Piece} from '../../models/piece';
import {Onduleur} from '../../models/onduleur';

interface PieceGroup {
  piece: Piece;
  onduleurs: Onduleur[];
}

@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  groupedByPiece: PieceGroup[] = [];

  constructor(private onduleurService: OnduleurService) {}

  async ngOnInit(): Promise<void> {
    const [onduleurs, pieces] = await Promise.all([
      this.onduleurService.getOnduleurs(),
      this.onduleurService.getPieces()
    ]);

    console.log('Onduleurs:', onduleurs);
    console.log('Pieces:', pieces);

    this.groupedByPiece = this.groupOnduleursByPiece(onduleurs, pieces);
    console.log('Groupes:', this.groupedByPiece);
  }

  private groupOnduleursByPiece(onduleurs: Onduleur[], pieces: Piece[]): PieceGroup[] {
    const pieceMap = new Map<number, Piece>();
    pieces.forEach(piece => {
      if (piece.id !== undefined) {
        pieceMap.set(Number(piece.id), piece);
      }
    });

    const groupMap = new Map<number, PieceGroup>();

    for (const ond of onduleurs) {
      const pieceId = Number(ond.pieceId);
      const piece = pieceMap.get(pieceId);
      if (!piece) continue;

      if (!groupMap.has(pieceId)) {
        groupMap.set(pieceId, {
          piece,
          onduleurs: [ond],
        });
      } else {
        groupMap.get(pieceId)!.onduleurs.push(ond);
      }
    }

    return Array.from(groupMap.values());
  }

  getOnduleursFromState(state: boolean) {
    return this.onduleurService.getOnduleurs().filter(onduleur => onduleur.status === state);
  }

}
