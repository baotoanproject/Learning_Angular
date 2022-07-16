import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'tmt-app-modal-confim',
  templateUrl: './modal-confim.component.html',
  styleUrls: ['./modal-confim.component.scss'],
})
export class ModalConfimComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataInject: any,
    public dialogRef: MatDialogRef<any>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
}
