import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleManagementComponent } from './role-management/role-management.component';
import { RouterModule, Routes } from '@angular/router';
import { PermissionRouteGuard } from 'src/app/core/auth/guards/permission-route.guard';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/mat-modules';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormRoleComponent } from './role-management/form-role/form-role.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'role',
    component: RoleManagementComponent,
    // canActivate: [PermissionRouteGuard],
    // data: { permission: 'ADMIN' },
  },
];

@NgModule({
  declarations: [RoleManagementComponent, FormRoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbPaginationModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SettingModule {}
