import { Component } from '@angular/core';
import { MainMenuModule } from 'perez-ui-toolkit';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [MainMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  itemsMenu: MenuItem[] = [
    {
      id: '1',
      label: 'Home',
      items: [
        {
          id: '1-1',
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: 'dashboard'
        }
      ]
    },
    {
      id: '2',
      label: 'UI Components',
      items: [
        {
          id: '2-1',
          label: 'Form Layout',
          icon: 'pi pi-fw pi-id-card',
          routerLink: 'form-layout'
        },
        {
          id: '2-2',
          label: 'Input',
          icon: 'pi pi-fw pi-check-square'
        },
        {
          id: '2-3',
          label: 'Buttons',
          icon: 'pi pi-fw pi-mobile'
        },
        {
          id: '2-4',
          label: 'Table',
          icon: 'pi pi-fw pi-table'
        },
        {
          id: '2-5',
          label: 'List',
          icon: 'pi pi-fw pi-list'
        },
        {
          id: '2-6',
          label: 'Tree',
          icon: 'pi pi-fw pi-share-alt'
        },
        {
          id: '2-7',
          label: 'Panel',
          icon: 'pi pi-fw pi-tablet'
        },
        {
          id: '2-8',
          label: 'Overlay',
          icon: 'pi pi-fw pi-clone'
        },
        {
          id: '2-9',
          label: 'Media',
          icon: 'pi pi-fw pi-image'
        },
        {
          id: '2-10',
          label: 'Menu',
          icon: 'pi pi-fw pi-bars'
        },
        {
          id: '2-11',
          label: 'Messages',
          icon: 'pi pi-fw pi-comment'
        },
        {
          id: '2-12',
          label: 'File',
          icon: 'pi pi-fw pi-file'
        },
        {
          id: '2-13',
          label: 'Chart',
          icon: 'pi pi-fw pi-chart-bar'
        },
        {
          id: '2-14',
          label: 'Timeline',
          icon: 'pi pi-fw pi-calendar'
        },
        {
          id: '2-15',
          label: 'Misc',
          icon: 'pi pi-fw pi-circle'
        }
      ]
    }
  ]
}
