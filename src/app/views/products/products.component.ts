import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, PanelMenuModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-plus', url: 'https://primeng.org/'},
          {label: 'Open', icon: 'pi pi-fw pi-folder', routerLink: '/card'},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      }
    ];
  }
}
