import { MESSAGES } from './../../../utils/Messages_json';
import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { PanelMenu, PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';

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
            icon: 'pi pi-plus',
          },
          {
            label: MESSAGES['encomendar'],
            icon: 'pi pi-search',
          },
          {
            label: MESSAGES['historico'],
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: MESSAGES['eventos'],
        items: [
          {
            label: MESSAGES['solicitar.orcamento'],
            icon: 'pi pi-plus',
            shortcut: MESSAGES['em.breve'],
          },
          {
            label: MESSAGES['meus.eventos'],
            icon: 'pi pi-search',
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
          },
          {
            label: MESSAGES['preferencias'],
            icon: 'pi pi-cog',
          },
          {
            label: MESSAGES['sair'],
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
