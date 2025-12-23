import { Component, Input } from '@angular/core';
import { MyBtn } from '../my-btn/my-btn';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() data!: string;
  @Input() userData!: number;
}
