import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}
    <button (click)="greeting='Welcome Santosh!'">Greet</button>
    <input #myInputText type="text">
    <button (click)="logMessage(myInputText.value)">Log Message</button>
    {{loggedMessage}}
    <input [(ngModel)]="username" type="text">
    {{username}}
    <h2 class="text-success">
      CodeVolution
    </h2>
    <h2 [class]="successClass">
      CodeVolution
    </h2>
    <h2 class="text-special" [class]="successClass">
      CodeVolution
    </h2>
    <h2 [class.text-danger]="hasError">
      CodeVolution
    </h2>
    <h2 [ngClass]="messageClasses">
      CodeVolution
    </h2>
    <h2 [style.color]="'orange'">
    Style Binding
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'green' ">
    Conditional Style Binding
    </h2>
    <h2 [style.color]="highlightColor">
      Style Binding 2
    </h2>
    <h2 [ngStyle]="titleStyles">
      Directive Style Binding
    </h2>
    <h2>
      {{2+2}}
    </h2>
    <h2>
      {{name.toUpperCase()}}
    </h2>
    <h2>
      {{greetUser()}}
    </h2>
    <h2>
      {{siteUrl}}
    </h2>
    <input type="text" [id]="myId" bind-disabled="isDisabled"  value="Santosh">
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name ="Santosh";
  public siteUrl = window.location.href;
  public myId="testId1";
  public isDisabled=false;
  public successClass="text-success";
  public hasError=true;
  public isSpecial = true;
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public highlightColor="orange";
  public titleStyles={
    color: "blue",
    fontStyle: "italic"
  }
  public greeting= "";
  public loggedMessage="";
  public username = "";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log("Welcome to Codevolution!!");
    this.greeting = event.type;
  }

  logMessage(message){
    console.log(message);
    this.loggedMessage=message;
  }

}
