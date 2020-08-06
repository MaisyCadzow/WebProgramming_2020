import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  title: string = "default counter"

  @Output()
  counted: EventEmitter<number> = new EventEmitter<number>(); 

  active: boolean = false;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(value: any) {
    console.log(value);
    this.counter += 1;
    this.counted.emit(1);
    if(this.counter >= 10){
      this.active = true;
    }
  }

}
