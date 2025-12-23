import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  flag: boolean = false;

  showModal(): void {
    this.flag = true;
  }

  hideModal(): void {
    this.flag = false;
  }
}
