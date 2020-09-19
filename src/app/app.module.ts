import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { from } from 'rxjs';

import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    RouterModule,
    SiteFrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
