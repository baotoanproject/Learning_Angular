import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/api/authenticate.service';
import { LocalStorageServiceService } from 'src/app/shared/service/local-storage-service.service';

@Component({
  selector: 'tmt-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authenticate: AuthenticateService,
    private localstorageserviceservice: LocalStorageServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.loginForm.value) {
      this.authenticate
        .getLogin(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((res: any) => {
          if (res.success) {
            if (res.token) {
              this.localstorageserviceservice.setLocalStorage(res.token);
            }
            this.router.navigateByUrl('/user');
          }
        });
    }
  }
}
