import { ITipoEvento } from './TipoEvento.model';

export interface EncomendarForm {
  nome: string;
  data: Date;
  tipo: ITipoEvento;
  numeroConvidados: Number;
  observacoes: string;
}
