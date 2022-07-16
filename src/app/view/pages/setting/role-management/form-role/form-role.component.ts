import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/api/role.service';
import { RoleManagementComponent } from '../role-management.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'tmt-app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {
  formRole = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataInject: any,
    public dialogRef: MatDialogRef<RoleManagementComponent>,
    public dialog: MatDialog,
    private roleService: RoleService,
    private toasts: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    if (this.dataInject.id) {
      this.getDetailRole();
    }
  }

  getDetailRole() {
    this.spinner.show();
    this.roleService
      .getRoleId(this.dataInject.id)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe((res: any) => {
        if (res.success) {
          this.formRole.patchValue({
            name: res.data.name,
          });
        }
      });
  }
  onSubmit() {
    if (this.formRole.valid) {
      if (this.dataInject.id) {
        this.updateRole();
      } else {
        this.addRole();
      }
    }
  }

  addRole() {
    this.roleService.postRoleId(this.formRole.value).subscribe((res) => {
      if (res.success) {
        this.toasts.success(res.message);
        this.dialogRef.close(true);
      } else {
        this.toasts.error(res.message);
      }
    });
  }
  updateRole() {
    this.roleService
      .putRoleId(this.dataInject.id, this.formRole.value)
      .subscribe((res) => {
        if (res.success) {
          this.toasts.success(res.message);
          this.dialogRef.close(true);
        } else {
          this.toasts.error(res.message);
        }
      });
  }
}
