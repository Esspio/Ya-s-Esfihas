import { Routes } from '@angular/router';
import { AppLayout } from './layout/app-layout/app-layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    /* children: [{ path: 'home', component: HomepageComponent }], */
  },
  { path: '**', redirectTo: '/notfound' },
];
