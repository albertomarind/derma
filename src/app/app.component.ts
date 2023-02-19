import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      title:'Product 1',
      description:'descripcion 1',
      price:59,
      image:'assets/images/product.png'
    },
    {
      title:'Product 2',
      description:'descripcion 2',
      price:60,
      image:'assets/images/product.png'
    },
    {
      title:'Product 3',
      description:'descripcion 3',
      price:65,
      image:'assets/images/product.png'
    }
  ];
}
