import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('id')
  idProduct!: number;

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  price: number = 0;

  @Input()
  image: string = '';

  @Output()
  onSelectProduct: EventEmitter<number> = new EventEmitter<number>();

  seleccionarProducto() {
    this.onSelectProduct.emit(this.idProduct);
  }

}
