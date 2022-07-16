import { Component, OnInit } from '@angular/core';
import { menuBar } from '../../config/menu';

@Component({
  selector: 'tmt-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: any;
  constructor(private menuBar: menuBar) {}

  ngOnInit(): void {
    this.menu = this.menuBar.default;
  }
}
