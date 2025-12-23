import { Component, Input } from '@angular/core';
import { IProduct } from '../../iproduct';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({
    required: true,
  })
  products!: IProduct;
  @Input() productIndex!: number;
}
