import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHidden: boolean = true; // hide model

  // false --> show model

  modelImg: string = '';

  imgSrc: string[] = [
    '/imgs/poert1.png',
    '/imgs/port2.png',
    '/imgs/port3.png',
    '/imgs/port3.png',
    '/imgs/poert1.png',
    '/imgs/port2.png',
  ];

  hideModel(eleTarget: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleTarget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }
}
