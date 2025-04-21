import { Component } from '@angular/core';
import {OnduleurComponent} from '../onduleur/onduleur.component';
import {NgForOf} from '@angular/common';
import {Onduleur} from '../../../models/onduleur';
import {OnduleurService} from '../../../services/onduleur.service';
import {FormsModule} from '@angular/forms';
import {Piece} from '../../../models/piece';

@Component({
  selector: 'app-onduleurs',
  imports: [
    OnduleurComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './onduleurs.component.html',
  standalone : true,
  styleUrl: './onduleurs.component.css'
})
export class OnduleursComponent {

  constructor(private onduleurService: OnduleurService) { }

  getPieces(): Piece[] {
   return this.onduleurService.getPieces()
  }

  getOnduleurs(): Onduleur[] {
    return this.onduleurService.getOnduleurs();
  }

  newOnduleur = {
    name: '',
    power: 0,
    state:false,
    pieceId:0

  };
  onSubmit() {

    this.onduleurService.addOnduleur(this.newOnduleur.name, this.newOnduleur.power, this.newOnduleur.state, this.newOnduleur.pieceId);
    this.newOnduleur = { name: '', power: 0, state:false, pieceId:0 };
  }

  invertState(id: Number | undefined) {
    if (id !== undefined) this.onduleurService.invertState(id);
  }

  removeOnduleur(onduleur: Onduleur) {
    this.onduleurService.removeOnduleur(onduleur);
  }
}
