import { Observable } from 'rxjs';
import { TOAST_OPTIONS_VALUES } from './../../shared/utils/ToastUtils';
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
import { ButtonModule } from 'primeng/button';
import { EncomendaMapper } from '../../shared/mapper/EncomendaMapper';
import { ToastService } from '../../core/services/components/ToastService';
import { AsyncPipe } from '@angular/common';

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
    ButtonModule,
    AsyncPipe,
  ],
  templateUrl: './encomendar.html',
  styleUrl: './encomendar.css',
})
export class Encomendar implements OnInit {
  messages = MESSAGES;
  formUtils = FormUtils;
  tipoEventoList$!: Observable<ITipoEvento[]>;

  encomendarForm = signal<EncomendarForm>({
    nomeEvento: '',
    data: new Date(),
    tipoEvento: { nome: '', codigo: 0 },
    quantidadeConvidados: 0,
    observacoes: '',
    codigoUsuario: 0,
    dataHoraPedido: '',
  });

  constructor(
    private service: EncomendarService,
    private toastService: ToastService,
  ) {}

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

  onSubmit() {
    this.service.salvarEncomenda(EncomendaMapper.toRequestDTO(this.encomendarForm())).subscribe({
      next: () =>
        this.toastService.showMessage(
          TOAST_OPTIONS_VALUES.SUCCESS,
          this.messages['encomenda.salva.com.sucesso'],
        ),
      error: () =>
        this.toastService.showMessage(
          TOAST_OPTIONS_VALUES.ERROR,
          this.messages['erro.ao.salvar.encomenda'],
        ),
    });
  }

  ngOnInit() {
    this.tipoEventoList$ = this.service.getTipoEventoList();
    /* this.service.fetchTipoEventoList().subscribe({
      next: (list) => {
        this.tipoEventoList = list;
      },
      error: () => {
        this.tipoEventoList = [];
      },
    }); */
  }
}
