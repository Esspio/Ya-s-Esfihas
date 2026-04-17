import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MESSAGES } from '../../../shared/utils/Messages_json';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-topbar',
  imports: [AutoCompleteModule, MenubarModule, FormsModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  items2: any[] = [];
  value: any;

  search(event: AutoCompleteCompleteEvent) {
    this.items2 = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

  items: MenuItem[] | undefined;
  messages = MESSAGES;

  ngOnInit() {
    this.items = [
      {
        label: this.messages['home'],
        icon: 'pi pi-home',
      },
      {
        label: this.messages['encomendar'],
        icon: 'pi pi-clipboard',
      },
      {
        label: this.messages['meus.pedidos'],
        icon: 'pi pi-shopping-bag',
      },
      {
        label: this.messages['novo.orcamento'],
        icon: 'pi pi-dollar',
      },
      {
        label: this.messages['whatsapp'],
        icon: 'pi pi-whatsapp',
      },
      {
        label: this.messages['meu.perfil'],
        icon: 'pi pi-user',
      },
    ];
  }
}
