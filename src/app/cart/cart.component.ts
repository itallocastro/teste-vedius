import { Component, OnInit } from '@angular/core';
import {ItemModel} from '../models/Item.model';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';
import {ListCardsGenericComponent} from '../shared/list-cards-generic/list-cards-generic.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends ListCardsGenericComponent implements OnInit {

  constructor(private storageService: StorageService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.mockLoading = true;
    this.storageService.getCartItems('items').subscribe((items) => {
      this.items = items;
      this.mockLoading = false;
    });
  }

  getSelectedItems(): any {
    return this.storageService.getItem('items');
  }

  async removeItem(id: number): Promise<void> {
    this.idSelected = id;
    await this.activeMock();
    const itemsAdd = this.getSelectedItems() || [];
    if (itemsAdd?.length) {
      const newItems = itemsAdd.filter((element: any) => element.id !== id);
      this.storageService.setItem(newItems);
      this.items = this.getSelectedItems();
    }

  }

  async cleanCart(): Promise<void> {
    await this.activeMock();
    this.storageService.removeAll('items');
    this.items = this.getSelectedItems();
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
