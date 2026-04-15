import { MESSAGES } from './../../../utils/Messages_json';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-encomendar',
  imports: [CardModule],
  templateUrl: './encomendar.html',
  styleUrl: './encomendar.css',
})
export class Encomendar {
  messages = MESSAGES;
}
