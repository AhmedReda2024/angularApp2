import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  userName: string = 'ahmed aly';

  @Output() datta: EventEmitter<string> = new EventEmitter();

  onFire(): void {
    this.datta.emit(this.userName);
  }
}
