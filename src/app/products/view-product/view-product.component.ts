import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productId = 0;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      this.productId = data.id;
    });
  }
}
