import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'calendar', component: CalendarComponent },
    ],
  },
];
