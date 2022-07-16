import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfimComponent } from './modal-confim.component';

describe('ModalConfimComponent', () => {
  let component: ModalConfimComponent;
  let fixture: ComponentFixture<ModalConfimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
