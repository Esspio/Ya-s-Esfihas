import { MESSAGES } from './../../../utils/Messages_json';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar',
  imports: [MenuModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  getMenuItemList(): MenuItem[] {
    return [
      {
        label: MESSAGES['pedidos'],
        items: [
          {
            label: MESSAGES['avulso'],
            icon: 'pi pi-plus-circle',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['encomendar'],
            icon: 'pi pi-clipboard',
            url: '/encomendar',
          },
          {
            label: MESSAGES['meus.pedidos'],
            icon: 'pi pi-shopping-bag',
            shortcut: MESSAGES['em.breve'],
          },
        ],
      },
      {
        label: MESSAGES['eventos'],
        items: [
          {
            label: MESSAGES['novo.orcamento'],
            icon: 'pi pi-dollar',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['meus.eventos'],
            icon: 'pi pi-shop',
            shortcut: MESSAGES['em.breve'],
          },
        ],
      },
      {
        label: MESSAGES['contato'],
        items: [
          {
            label: MESSAGES['whatsapp'],
            icon: 'pi pi-whatsapp',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['email'],
            icon: 'pi pi-envelope',
            shortcut: MESSAGES['em.breve'],
          },
        ],
      },
      {
        label: MESSAGES['perfil'],
        items: [
          {
            label: MESSAGES['meu.perfil'],
            icon: 'pi pi-user',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['preferencias'],
            icon: 'pi pi-cog',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['sair'],
            icon: 'pi pi-sign-out',
            shortcut: MESSAGES['em.breve'],
          },
        ],
      },
    ];
  }
}
