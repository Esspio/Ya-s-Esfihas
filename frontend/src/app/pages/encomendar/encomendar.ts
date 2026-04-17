import { MESSAGES } from './../../../utils/Messages_json';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-encomendar',
  imports: [FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './encomendar.html',
  styleUrl: './encomendar.css',
})
export class Encomendar {
  messages = MESSAGES;
  value1: string | undefined;
}
