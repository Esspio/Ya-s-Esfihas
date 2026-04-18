import { ITipoEvento } from '../../models/TipoEvento';

export class EncomendarServiceMock {
  static fetchTipoEventoList(): ITipoEvento[] {
    return [
      { codigo: '1', nome: 'Casamento' },
      { codigo: '2', nome: 'Aniversário' },
      { codigo: '3', nome: 'Corporativo' },
    ];
  }
}
