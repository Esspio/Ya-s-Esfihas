import { ITipoEvento } from './TipoEvento';

export interface EncomendarForm {
  nomeEvento: string;
  data: Date | null;
  tipoEvento: ITipoEvento;
  quantidadeConvidados: number;
  observacoes: string;
  codigoUsuario: number;
  dataHoraPedido: string;
}
