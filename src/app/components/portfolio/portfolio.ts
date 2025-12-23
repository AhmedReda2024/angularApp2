import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() x!: string;

  constructor() {
    console.log('%c Hello Constructor ', 'background-color:tomato');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c Hello ngOnChanges ', 'background-color:#09c');
    console.log(this.x);
  }

  ngOnInit(): void {
    console.log('%c Hello ngOnInit ', 'background-color:green');
  }

  ngDoCheck(): void {
    console.log('%c Hello ngDoCheck ', 'background-color:brown');
  }

  ngAfterContentInit(): void {
    console.log('%c Hello ngAfterContentInit ', 'background-color:orange');
  }

  ngAfterContentChecked(): void {
    console.log('%c Hello ngAfterContentChecked ', 'background-color:blue');
  }

  ngAfterViewInit(): void {
    console.log('%c Hello ngAfterViewInit ', 'background-color:darkcyan');
  }

  ngAfterViewChecked(): void {
    console.log('%c Hello ngAfterViewChecked ', 'background-color:tan');
  }

  ngOnDestroy(): void {
    console.log('%c Hello ngOnDestroy ', 'background-color:red');
  }
}
