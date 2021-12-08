import { Injectable } from '@angular/core';
import {ItemModel} from '../models/Item.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(items: ItemModel[]): void {
    localStorage.setItem('items', JSON.stringify(items));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  removeAll(key: string): void {
    localStorage.removeItem(key);
  }

  // Just to simulate an asynchronous call.
  getCartItems(key: string): Observable<any> {
    return of(this.getItem(key)).pipe(delay(2000));
  }
}
