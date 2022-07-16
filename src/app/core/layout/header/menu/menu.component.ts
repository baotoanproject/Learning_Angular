import { Component, OnInit } from '@angular/core';
import { menuBar } from 'src/app/core/config/menu';

@Component({
  selector: 'tmt-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: any;

  constructor(private menuBar: menuBar) {}

  ngOnInit(): void {
    this.menu = this.menuBar.default;
  }
}
