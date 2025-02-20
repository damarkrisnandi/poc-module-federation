import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
      {label: 'Berita', icon: 'pi pi-book', routerLink: '/main'},
      // {label: 'Kontak', icon: 'pi pi-phone', routerLink: '/home'}
  ];
  }

}
