import {Injectable} from '@angular/core';
import {Onduleur} from '../models/onduleur';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OnduleurService {

  private onduleurs: Onduleur[] = [];

  constructor(private api: ApiService) {
    this.refreshOnduleurs();
  }

  getOnduleurs(): Onduleur[] {
    return this.onduleurs;
  }

  refreshOnduleurs(): void {
    this.api.getOnduleurs().then((onduleurs: any) => this.onduleurs = onduleurs);
  }

  addOnduleur(name: string, power: Number, state: boolean): void {
    this.api.addOnduleur({"name": name, "state": state, "power" : power})
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshOnduleurs());
  }

  removeOnduleur(onduleur: Onduleur) {
    this.api.removeOnduleur(onduleur)
      .catch((error: any) => {console.log(error);})
      .finally(() => this.refreshOnduleurs());
  }
}
