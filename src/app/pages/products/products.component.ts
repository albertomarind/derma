import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productsService: ProductsService, private router: Router) {

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (response: any) => {
        this.products = response.products;
      }
    )
  }

  goToDetail(idProduct: number) {
    this.router.navigate(['/detalle-producto', idProduct]);
  }


}
