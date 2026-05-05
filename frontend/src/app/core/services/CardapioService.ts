import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItemCardapio } from '../../shared/models/ItemCardapio';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private baseUrl = 'http://localhost:8080/cardapio';

  constructor(private http: HttpClient) {}

  getItemCardapioList(): Observable<IItemCardapio[]> {
    return this.http.get<IItemCardapio[]>(`${this.baseUrl}/get-item-cardapio-list`);
  }
}
