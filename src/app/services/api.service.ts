import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Onduleur} from '../models/onduleur';
import {Piece} from '../models/piece';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  checkPing(): Promise<boolean> {
    return new Promise(resolve => {
      this.httpClient.get("/api/ping", {responseType: "text"})
        .subscribe({
          next: (responses: any) => {
            resolve(responses);
          },
          error: () => {
            resolve(false);
          }
        });
    });
  }

  getOnduleurs(): Promise<Onduleur[]> {
    return new Promise(resolve => {
      this.httpClient.get("/api/onduleur")
        .subscribe({
          next: (responses: any) => {
            resolve(responses);
          },
          error: () => {
            resolve([]);
          }
        });
    });
  }
  getPieces(): Promise<Piece[]> {
    return new Promise(resolve => {
      this.httpClient.get("/api/piece")
        .subscribe({
          next: (responses: any) => {
            resolve(responses);
          },
          error: () => {
            resolve([]);
          }
        });
    });
  }

  addOnduleur(onduleur: Onduleur): Promise<Onduleur> {
    return new Promise((resolve, reject) => {
      this.httpClient.post("/api/onduleur", onduleur)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: () => {
            reject();
          }
        });
    });
  }

  addPiece(piece: Piece): Promise<Piece> {
    return new Promise((resolve, reject) => {
      this.httpClient.post("/api/piece", piece)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: () => {
            reject();
          }
        });
    });
  }

  removeOnduleur(onduleur: Onduleur): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete("/api/onduleur", {body: onduleur})
        .subscribe({
          next: () => {
            resolve();
          },
          error: () => {
            reject();
          }
        });
    });
  }
  removePiece(piece: Piece): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete("/api/piece", {body: piece})
        .subscribe({
          next: () => {
            resolve();
          },
          error: () => {
            reject();
          }
        });
    });
  }

  updateOnduleur(onduleur: Onduleur): Promise<Onduleur> {
    return new Promise((resolve, reject) => {
      this.httpClient.post("/api/onduleur", onduleur)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: () => {
            reject();
          }
        });
    });
  }

  updatePiece(piece: Piece): Promise<Piece> {
    return new Promise((resolve, reject) => {
      this.httpClient.post("/api/piece", piece)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: () => {
            reject();
          }
        });
    });
  }
}

