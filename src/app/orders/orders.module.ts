import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListOrdersComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListOrdersComponent],
})
export class OrdersModule {}
