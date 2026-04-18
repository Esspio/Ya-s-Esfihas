import { MESSAGES } from '../../shared/utils/Messages_json';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { EncomendarForm } from '../../shared/models/EncomendarForm.model';
import { FormUtils } from '../../shared/utils/FormUtils';

interface City {
  name: string;
  code: string;
}

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

  encomendarForm = signal<EncomendarForm>({
    nome: '',
    data: new Date(),
    tipo: { nome: '', codigo: '' },
    numeroConvidados: 0,
    observacoes: '',
  });

  value1: string | undefined;
  value3: Date | undefined;

  cities!: City[];
  selectedCity: City | undefined;

  onObservacoesChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;

    this.formUtils.updateField(this.encomendarForm, 'observacoes', value);
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
