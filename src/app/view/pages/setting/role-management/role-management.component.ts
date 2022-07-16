import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/api/role.service';
import { Role } from 'src/app/model/role';
import { ModalConfimComponent } from 'src/app/shared/component/modal-confim/modal-confim.component';
import { FormRoleComponent } from './form-role/form-role.component';
import { finalize, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'tmt-app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  lstRoles: Role[] = [];
  page = 1;
  pageSize = 10;
  total = 0;

  /**search */
  public keyUp = new Subject<KeyboardEvent>(); // Tạo 1 subject để chứ value ng dùng nhập , và subscibe khi có value mới
  searchRole: string = ''; // tạo 1 biến search để chứa dữ liệu khi subscribe subject

  constructor(
    private roleService: RoleService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllRole();
    this.onSearch();
  }

  /** get api */
  getAllRole() {
    this.spinner.show();
    // search cột nào thì lấy tên cột đó , search kiểu string thì dùng @=* , giả sử muốn search 1 lúc cả nhiều cọt thì name|name1|name2@=*
    this.roleService
      .getAllRole(`name@=*${this.searchRole}`, '', this.page, this.pageSize)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe((res: any) => {
        this.lstRoles = res.data;
        this.total = res.total;
        this.lstRoles.forEach((value, index) => {
          Object.assign(this.lstRoles[index], {
            index: this.pageSize * (this.page - 1) + (index + 1),
          });
        });
        this.cdr.detectChanges();
      });
  }

  /** search */
  onSearch() {
    //Auto subcribe khi ng dùng nhập --> call api để search
    this.keyUp
      .pipe(
        map((event) => event),
        debounceTime(500)
      )
      .subscribe((value: any) => {
        this.searchRole = value;
        this.getAllRole();
      });
  }

  /**paging */
  paginatorChange(event: any) {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.getAllRole();
  }

  /** */
  deleteRole(id: string) {
    const dialogRef = this.dialog.open(ModalConfimComponent, {
      width: '440px',
      data: {
        title: 'Xóa Role',
        content: 'Bạn có chắc chắn muốn xóa role này ?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner.show();
        this.roleService
          .deleteRoleId(id)
          .pipe(
            finalize(() => {
              this.spinner.hide();
            })
          )
          .subscribe((res: any) => {
            if (res.success) {
              this.getAllRole();
              this.toastr.success(res.message);
            } else {
              this.toastr.error(res.message);
            }
          });
      }
    });
  }
  openModalCreateEdit(id?: string) {
    const dialogRef = this.dialog.open(FormRoleComponent, {
      width: '440px',
      data: {
        id: id,
        title: id ? 'Chỉnh sửa Role' : 'Thêm mới Role',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllRole();
      }
    });
  }
}
