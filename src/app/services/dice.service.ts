// src/app/services/dice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private apiUrl = `${environment.apiUrl}/dice`;

  constructor(private http: HttpClient) {}

  getAllDice() {
    return this.http.get(this.apiUrl);
  }

  getDiceById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createDice(dice: any) {
    return this.http.post(this.apiUrl, dice);
  }
}
