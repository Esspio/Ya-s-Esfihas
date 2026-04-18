import { Injectable } from '@angular/core';
import { ITipoEvento } from '../../shared/models/TipoEvento';
import { EncomendarServiceMock } from '../../shared/mocks/services/EncomendarServiceMock';

@Injectable({
  providedIn: 'root',
})
export class EncomendarService {
  fetchTipoEventoList(): ITipoEvento[] {
    return EncomendarServiceMock.fetchTipoEventoList();
  }
}
