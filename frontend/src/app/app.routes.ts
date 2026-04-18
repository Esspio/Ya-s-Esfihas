import { Routes } from '@angular/router';
import { AppLayout } from './pages/app-layout/app-layout';
import { Encomendar } from './pages/encomendar/encomendar';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [{ path: 'encomendar', component: Encomendar }],
  },
  { path: '**', redirectTo: '/notfound' },
];
