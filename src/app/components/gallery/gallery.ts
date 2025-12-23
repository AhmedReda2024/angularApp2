import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Hamada } from '../hamada/hamada';

@Component({
  selector: 'app-gallery',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Hamada],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {}
