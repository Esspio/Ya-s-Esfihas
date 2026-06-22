import { Observable } from 'rxjs';
import { TOAST_OPTIONS_VALUES } from './../../shared/utils/ToastUtils';
import { MESSAGES } from '../../shared/utils/Messages_json';
import { Component, computed, OnInit, signal } from '@angular/core';
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
import { PickListModule } from 'primeng/picklist';
import { IItemCardapio } from '../../shared/models/ItemCardapio';
import { CardapioService } from '../../core/services/CardapioService';

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
    PickListModule,
  ],
  templateUrl: './encomendar.html',
  styleUrl: './encomendar.css',
})
export class Encomendar implements OnInit {
  messages = MESSAGES;
  formUtils = FormUtils;
  tipoEventoList$!: Observable<ITipoEvento[]>;
  itemCardapioDisponivelList$!: Observable<IItemCardapio[]>;
  itemCardapioSelecionadoList: IItemCardapio[] = [];
  dataEventoMinima: Date = new Date();

  submitted = signal(false);

  private readonly initialFormState: EncomendarForm = {
    nomeEvento: '',
    data: null,
    tipoEvento: { nome: '', codigo: 0 },
    quantidadeConvidados: 0,
    observacoes: '',
    codigoUsuario: 0,
    dataHoraPedido: '',
  };

  encomendarForm = signal<EncomendarForm>({ ...this.initialFormState });

  constructor(
    private encomendarService: EncomendarService,
    private toastService: ToastService,
    private cardapioService: CardapioService,
  ) {}

  onDataEventoChange(date: Date | null) {
    this.formUtils.updateField(this.encomendarForm, 'data', date);
  }

  onInputNumeroConvidados(event: InputNumberInputEvent) {
    this.formUtils.updateField(this.encomendarForm, 'quantidadeConvidados', Number(event.value));
  }

  onInputQuantidadeItem(event: InputNumberInputEvent) {
    this.formUtils.updateField(this.encomendarForm, 'quantidadeConvidados', Number(event.value));
  }

  onObservacoesChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.formUtils.updateField(this.encomendarForm, 'observacoes', value);
  }

  onLimpar() {
    this.submitted.set(false);
    this.itemCardapioSelecionadoList = [];
    this.encomendarForm.set({ ...this.initialFormState });
  }

  onSubmit() {
    this.submitted.set(true);

    if (!this.isFormValid()) {
      this.toastService.showMessage(
        TOAST_OPTIONS_VALUES.ERROR,
        this.messages['preencha.todos.os.campos.destacados'],
      );

      return;
    }

    this.encomendarService
      .salvarEncomenda(EncomendaMapper.toRequestDTO(this.encomendarForm()))
      .subscribe({
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

  formErrors = computed(() => {
    const form = this.encomendarForm();

    return {
      nomeEvento: !form.nomeEvento.trim(),
      tipoEvento: form.tipoEvento.codigo === 0,
      dataEvento: form.data == null,
      quantidadeConvidados: form.quantidadeConvidados <= 0,
      itens: this.itemCardapioSelecionadoList.length === 0,
    };
  });

  isFormValid = computed(() => Object.values(this.formErrors()).every((hasError) => !hasError));

  showFieldError(
    field: 'nomeEvento' | 'tipoEvento' | 'dataEvento' | 'quantidadeConvidados' | 'itens',
  ): boolean {
    return this.submitted() && this.formErrors()[field];
  }

  ngOnInit() {
    this.tipoEventoList$ = this.encomendarService.getTipoEventoList();
    this.itemCardapioDisponivelList$ = this.cardapioService.getItemCardapioList();
  }
}
