import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Hello "+parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  public fireEvent(){
    this.childEvent.emit("Hey CodeVolution");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
