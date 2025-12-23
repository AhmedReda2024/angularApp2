import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  providers: [DataService],
})
export class About implements OnInit {
  friendsAbout: string[] = [];

  private readonly dataService = inject(DataService);

  constructor() {
    this.friendsAbout = this.dataService.friends;
  }

  ngOnInit(): void {
    this.dataService.friends.pop();
  }
}
