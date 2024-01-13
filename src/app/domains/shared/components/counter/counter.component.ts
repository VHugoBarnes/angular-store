import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = "";

  constructor() {
    console.log("Constructor");
    console.log("=".repeat(20));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log("ngOnChanges");
    console.log({ changes });
    console.log("=".repeat(20));
  }
}
