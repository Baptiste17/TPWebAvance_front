import { Component } from '@angular/core';
import {OnduleurComponent} from '../onduleur/onduleur.component';
import {NgForOf} from '@angular/common';
import {Onduleur} from '../../../models/onduleur';
import {OnduleurService} from '../../../services/onduleur.service';
import {FormsModule} from '@angular/forms';

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

  getOnduleurs(): Onduleur[] {
    return this.onduleurService.getOnduleurs();
  }
  newOnduleur = {
    name: '',
    power: 0,
    state:false

  };
  onSubmit() {

    this.onduleurService.addOnduleur(this.newOnduleur.name, this.newOnduleur.power, this.newOnduleur.state);
    // Reset le formulaire après soumission
    this.newOnduleur = { name: '', power: 0, state:false };
  }

  removeOnduleur(onduleur: Onduleur) {
    this.onduleurService.removeOnduleur(onduleur);
  }
}
