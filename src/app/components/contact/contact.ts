import { Component, ViewChild } from '@angular/core';
import { Modal } from '../modal/modal';
import { Portfolio } from '../portfolio/portfolio';

@Component({
  selector: 'app-contact',
  imports: [Modal, Portfolio],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userName: string = 'ahmed reda';

  userAge: number = 30;

  @ViewChild(Modal) myModal!: Modal;
}
