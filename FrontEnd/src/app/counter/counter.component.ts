import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  startAt = 0;


  @Output()
  counter = new EventEmitter<string>();

  currentValue = '';


  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public start(){
    this.currentValue = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();

    
  }

  private formatValue(v){
    const minutes = Math.floor(v/60);
    const formattedMinutes = (minutes > 9? minutes : '0' + minutes  );

    const seconds = v % 60;
    const formattedSeconds = (seconds > 9? minutes : '0' + minutes );

    return `${formattedMinutes}:${formattedSeconds}`;




  }

}
