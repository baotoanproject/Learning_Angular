import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  constructor() {}

  ngOnInit(): void {}
}
