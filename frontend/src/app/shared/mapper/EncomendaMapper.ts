import { EncomendaRequestDTO } from '../dto/EncomendaRequestDTO';
import { EncomendarForm } from '../models/EncomendarForm';

export class EncomendaMapper {
  static toRequestDTO(form: EncomendarForm): EncomendaRequestDTO {
    return {
      nomeEvento: form.nomeEvento,
      data: form.data.toISOString().split('T')[0],
      codigoTipoEvento: form.tipoEvento.codigo,
      quantidadeConvidados: form.quantidadeConvidados,
      observacoes: form.observacoes,
    };
  }
}
