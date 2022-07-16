import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      {
        path: 'user',
        component: UserManagementComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, NgbPaginationModule, RouterModule.forChild(routes)],
})
export class UserModule {}
