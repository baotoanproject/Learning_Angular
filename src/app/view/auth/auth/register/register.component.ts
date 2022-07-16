import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/api/authenticate.service';
import { LocalStorageServiceService } from 'src/app/shared/service/local-storage-service.service';

@Component({
  selector: 'tmt-app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private authenticate: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.registerForm.value) {
      this.authenticate
        .getRegister(this.registerForm.value)
        .subscribe((res: any) => {
          if (res.success) {
            this.router.navigateByUrl('/login');
          }
        });
    }
  }
}
