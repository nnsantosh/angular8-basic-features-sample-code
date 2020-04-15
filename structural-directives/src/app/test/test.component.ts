import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="false">
    Codevolution
  </h2>
  <div [ngSwitch]="color">
    <div [style.color]="'red'" *ngSwitchCase="'red'">You picked red color</div>
    <div [style.color]="'blue'" *ngSwitchCase="'blue'">You picked blue color</div>
    <div [style.color]="'green'" *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick color again</div>
  </div>
  <div *ngFor="let colour of colours;index as i;"> 
    <h2>{{i}} {{colour}}</h2>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public color="green";
  public colours = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
