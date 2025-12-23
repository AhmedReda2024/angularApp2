import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-hamada',
  imports: [],
  templateUrl: './hamada.html',
  styleUrl: './hamada.css',
})
export class Hamada {
  @ContentChildren('head') elementsss!: QueryList<ElementRef>;

  test(): void {
    this.elementsss.forEach((item) => {
      item.nativeElement.classList.add('bg-danger');
    });
  }
}
