import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuBar } from 'src/app/core/config/menu';

@Component({
  selector: 'tmt-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  menu: any;

  constructor(private menuBar: menuBar, private router: Router) {}

  ngOnInit(): void {
    this.menu = this.menuBar.default;
  }
}
