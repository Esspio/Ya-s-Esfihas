import { ITipoEvento } from './TipoEvento';

export interface EncomendarForm {
  nome: string;
  data: Date;
  tipoEvento: ITipoEvento;
  quantidadeConvidados: Number;
  observacoes: string;
}
