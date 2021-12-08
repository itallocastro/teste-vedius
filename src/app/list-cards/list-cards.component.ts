import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {ItemModel} from '../models/Item.model';
import {StorageService} from '../services/storage.service';
import {element} from 'protractor';
import {ListCardsGenericComponent} from '../shared/list-cards-generic/list-cards-generic.component';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent extends ListCardsGenericComponent implements OnInit{

  constructor(private itemService: ItemService, private storageService: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.mockLoading = true;
    this.itemService.getItems().subscribe((items: ItemModel[]) => {
      this.items = items || [];
      this.mockLoading = false;
    });
  }

  getSelectedItems(): any {
    return this.storageService.getItem('items');
  }

  async addItem(item: ItemModel): Promise<void> {
    this.idSelected = item.id;
    await this.activeMock();
    const itemsAdd = this.getSelectedItems();
    if (!itemsAdd) {
      this.storageService.setItem([item]);
      return;
    }
    itemsAdd.push(item);
    this.storageService.setItem(itemsAdd);
  }

  async removeItem(id: number): Promise<void> {
    this.idSelected = id;
    await this.activeMock();
    const itemsAdd = this.getSelectedItems() || [];
    if (itemsAdd?.length) {
      const newItems = itemsAdd.filter((element: any) => element.id !== id);
      this.storageService.setItem(newItems);
    }

  }

  alreadySelectedItem(id: number): boolean {
    const items = this.getSelectedItems() || [];
    const found = items.find((element: any) => element.id === id);
    return !found;
  }

}
