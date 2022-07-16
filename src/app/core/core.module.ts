import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorsService } from './interceptors/interceptors.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { menuBar } from './config/menu';
import { MenuComponent } from './layout/header/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './layout/header/profile/profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    MenuComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, AppRoutingModule, NgbModule, MatIconModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsService,
      multi: true,
    },
    menuBar,
  ],
})
export class CoreModule {}
