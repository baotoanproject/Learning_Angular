import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PermissionRouteGuard } from 'src/app/core/auth/guards/permission-route.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [PermissionRouteGuard],
    data: { permission: 'ADMIN' },
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
