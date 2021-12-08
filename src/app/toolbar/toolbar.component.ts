import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  open: boolean = false;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  getLengthCart(): number {
    return this.storageService.getItem('items')?.length || 0;
  }

  openMenu(): void {
    this.open = !this.open;
  }

  goCart(): void {
    this.router.navigate(['carrinho']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
