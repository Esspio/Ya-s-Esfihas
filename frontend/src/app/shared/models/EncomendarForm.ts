import { ITipoEvento } from './TipoEvento';

export interface EncomendarForm {
  nomeEvento: string;
  data: Date;
  tipoEvento: ITipoEvento;
  quantidadeConvidados: Number;
  observacoes: string;
  codigoUsuario: Number;
  dataHoraPedido: Number;
}
