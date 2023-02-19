import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any = {};

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const idProducto = this.activatedRoute.snapshot.paramMap.get('idProducto');
    this.productService.getProductById(Number(idProducto)).subscribe(
      (product) => {
        this.product = product;
      }
    );
  }

}
