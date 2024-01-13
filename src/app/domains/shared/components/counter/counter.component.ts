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
    // Runs once
    console.log("Constructor");
    console.log("=".repeat(20));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log("ngOnChanges");
    console.log({ changes });
    console.log("=".repeat(20));

    const duration = changes["duration"];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // async
    console.log("ngOnInit");
    console.log("duration =>", this.duration);
    console.log("message =>", this.message);
    console.log("=".repeat(20));
  }

  ngAfterViewInit() {
    // after render
    // if child were rendered
    console.log("ngAfterViewInit");
    console.log("=".repeat(20));
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    console.log("=".repeat(20));
  }

  doSomething() {
    console.log("Change duration");
  }
}
