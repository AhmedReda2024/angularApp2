import { Component } from '@angular/core';
import { IProduct } from '../../iproduct';
import { Card } from '../card/card';

@Component({
  selector: 'app-recommend-product',
  imports: [Card],
  templateUrl: './recommend-product.html',
  styleUrl: './recommend-product.css',
})
export class RecommendProduct {
  productList: IProduct[] = [
    {
      id: 1,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
      price: 190,
      quantity: 225,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: 2,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      id: 3,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: 4,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg',
      ],
      onSale: true,
    },
    {
      id: 5,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg',
      price: 349,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg',
      ],
      onSale: false,
    },
    {
      id: 6,
      title: 'Woman Bordeaux Long Sleeve Blouse BORDEAUX',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg',
      price: 499,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-1.jpeg',
      ],
      onSale: true,
    },
  ];
}
