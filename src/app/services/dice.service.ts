import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Dice } from '../models/dice.model';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getAllDices(): Observable<Dice[]> {
    return this.http.get<Dice[]>(`${this.apiUrl}/dice`);
  }

  getDiceById(id: string) {
    return this.http.get(`${this.apiUrl}/dice/${id}`);
  }

  createDice(dice: any) {
    return this.http.post(`${this.apiUrl}/dice`, dice);
  }

  deleteDice(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/dice/${id}`);
  }
}
