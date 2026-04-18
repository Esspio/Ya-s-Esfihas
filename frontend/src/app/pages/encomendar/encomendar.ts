import { MESSAGES } from '../../shared/utils/Messages_json';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { EncomendarForm } from '../../shared/models/EncomendarForm';
import { FormUtils } from '../../shared/utils/FormUtils';
import { ITipoEvento } from '../../shared/models/TipoEvento';
import { EncomendarService } from '../../core/services/EncomendarService';

@Component({
  selector: 'app-encomendar',
  imports: [
    FloatLabelModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    DatePickerModule,
    SelectModule,
    CardModule,
  ],
  templateUrl: './encomendar.html',
  styleUrl: './encomendar.css',
})
export class Encomendar implements OnInit {
  messages = MESSAGES;
  formUtils = FormUtils;
  tipoEventoList!: ITipoEvento[];

  encomendarForm = signal<EncomendarForm>({
    nome: '',
    data: new Date(),
    tipoEvento: { nome: '', codigo: '' },
    quantidadeConvidados: 0,
    observacoes: '',
  });

  constructor(private service: EncomendarService) {}

  onSelectDataEvento(event: Date) {
    this.formUtils.updateField(this.encomendarForm, 'data', event);
  }

  onInputNumeroConvidados(event: InputNumberInputEvent) {
    this.formUtils.updateField(this.encomendarForm, 'quantidadeConvidados', Number(event.value));
  }

  onObservacoesChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.formUtils.updateField(this.encomendarForm, 'observacoes', value);
  }

  ngOnInit() {
    this.tipoEventoList = this.service.fetchTipoEventoList();
  }
}
