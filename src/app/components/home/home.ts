import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [DataService],
})
export class Home {
  friendsHome: string[] = [];

  private readonly dataService = inject(DataService);

  constructor() {
    this.friendsHome = this.dataService.friends;
  }
  /*

  SOLID

  D --> Dependency Inversion

  - we don't prefer depend on tight coupling

  &"tight coupling"
  - High level class depend on Low level class


  - it prefer to depend on loose coupling

  &"loose coupling"
  - High level class don't depend on Low level class

  */

  /*

  To solve it :

  - Design Pattern "Dependency Injection" - "DI"

  حقن الاعتمادات
  بحقن الحاجات اللى انا بكون معتمد عليها

  by use constructor inejction or function injection

  */
}
