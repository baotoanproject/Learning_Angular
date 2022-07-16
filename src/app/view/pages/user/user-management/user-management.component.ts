import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'tmt-app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  page = 1;
  pageSize = 10;
  total = 0;
  listUser: User[] = [];
  constructor(private userSvc: UserService) {}

  ngOnInit(): void {
    this.getListUser();
  }

  public getListUser() {
    this.userSvc
      .getAllUser('', '', this.page, this.pageSize)
      .subscribe((res: any) => {
        this.listUser = res.data;
        this.total = res.total;
        console.log(res);
      });
  }

  public loadNext(page: number) {
    this.page = page;
    this.getListUser();
  }
}
