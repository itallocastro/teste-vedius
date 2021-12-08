import { Component, OnInit } from '@angular/core';
import {ItemModel} from '../../models/Item.model';

@Component({
  selector: 'app-list-cards-generic',
  templateUrl: './list-cards-generic.component.html',
  styleUrls: ['./list-cards-generic.component.scss']
})
export class ListCardsGenericComponent {

  items: ItemModel[];
  idSelected: number;
  mockLoading = false;

  constructor() { }

  async activeMock(): Promise<void> {
    this.mockLoading = await this.mockDelay(1000);
  }

  mockDelay(ms: number): Promise<boolean> {
    this.mockLoading = true;
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(false);
        this.idSelected = null;
      }, ms);
    });
  }

}
