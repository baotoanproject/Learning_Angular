import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageServiceService } from './service/local-storage-service.service';
import { SubheaderComponent } from './subheader/subheader.component';
import { ModalConfimComponent } from './component/modal-confim/modal-confim.component';
import { MaterialModule } from 'src/mat-modules';

@NgModule({
  declarations: [SubheaderComponent, ModalConfimComponent],
  providers: [LocalStorageServiceService],
  exports: [SubheaderComponent, ModalConfimComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
