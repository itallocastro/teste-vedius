import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCardsComponent} from './list-cards/list-cards.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ListCardsComponent,
  },
  {
    path: 'carrinho',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
