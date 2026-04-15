import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MESSAGES } from '../../../../utils/Messages_json';

@Component({
  selector: 'app-topbar',
  imports: [MenubarModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
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
