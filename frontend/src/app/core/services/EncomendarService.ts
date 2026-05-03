import { Injectable } from '@angular/core';
import { ITipoEvento } from '../../shared/models/TipoEvento';
import { EncomendarServiceMock } from '../../shared/mocks/services/EncomendarServiceMock';
import { HttpClient } from '@angular/common/http';
import { EncomendaRequestDTO } from '../../shared/dto/EncomendaRequestDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EncomendarService {
  private baseUrl = 'http://localhost:8080/encomendar';

  constructor(private http: HttpClient) {}

  salvarEncomenda(dto: EncomendaRequestDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/insert`, dto);
  }

  fetchTipoEventoList(): Observable<ITipoEvento[]> {
    return this.http.get<ITipoEvento[]>(`${this.baseUrl}/get-tipo-evento-list`);
  }
}
