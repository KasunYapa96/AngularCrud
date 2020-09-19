import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productId = 0;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      this.productId = data.id;
    });
  }
}
