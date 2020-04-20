--Angular CLI commands <br/>
--Command to create new angular project <br/>
ng new <project name> <br/>
--Command to create new component <br/>
ng generate component <component name> <br/>
ng g c component <br/>
ng g c -it -is <br/>
The above command will generate inline template and style <br/>
--Command to create new module <br/>
ng generate module <module name> <br/>
--Command to generate routing module <br/>
--Command to create service <br/>
ng generate service <service name> <br/>
--To generate a class <br/>
ng generate class <class name> <br/>

--As a good naming convention try to give component names with hyphen like user-list , user-detail etc. <br/>

—-Creating new angular project using angular cli <br/>
 ng new hello-world <br/>

--High level flow of angular app: <br/>
main.ts -> loads(bootstraps) the AppModule which is root module(app.module.ts) and will have all other modules plus components -> AppModule loads(bootstraps) the root component which is AppComponent (app.component.ts)-> The AppComponent will have the decorator(meta data) plus the typescript class plus the view html and css. <br/>
The index.html will have the app-root selector html tag using which the app.component.html is rendered. <br/> 
All other component’s  html selector tag can be enclosed within the app.component.html and can be rendered. <br/>

-—Module is the first building block of an angular app. <br/>
Angular apps are modular in nature. <br/>
An angular application is just a collection of individual modules. <br/>
Every module represents a  feature area in your application. <br/>
For Example: We can have a users module that is related to application users and we can have admin module that is related to application admin. <br/>
At the end of the day angular module is just lines of code that can be imported or exported. <br/>
Every angular application has at least one module which is the Root module known as AppModule. <br/>
Each module in turn is made of components and services. <br/>

—-A component controls a portion of the view on the browser. <br/>
For Example: We can have a component for navigation, one for side bar and one for the main content. <br/>
Every angular application will have at least one component which is the Root component of the application known as AppComponent(app.component.ts). <br/>
All the other components will be nested inside this Root component. <br/>
Each component will have a html template to represent the view in the browser and class that controls the logic of that particular view. <br/>
--Creating a new component using angular cli <br/>
ng g c <component name> <br/>
--If you need component with inline template and style <br/>
ng g c <component name> -it -is <br/>

-—Module will also contain Services which is basically a class that contains the business logic of your application. <br/>
-—Modules interact and ultimately render the view in the browser. <br/>

In the src folder there is main.ts which is the entry point for our application. <br/>
Next is app folder <br/>
-—Component: <br/>
Consists of three components: <br/>
1. Template-HTML View <br/>
2. Class in TypeScript that contains methods and properties. <br/>
3. MetaData which is Decorator that contains information about the class. <br/>

-—Interpolation: <br/>
{{name}} <br/>
Simplest way to bind data from class to a template <br/>

Attributes and Properties are not the same. <br/>
Attributes are defined by html. <br/>
Properties are defined by DOM. <br/>
Attributes initialize DOM properties and then they are done. <br/>
Attribute values cannot change once they are initialized. <br/>
The attribute's main role is to initializes the DOM properties. So, once the DOM initialization is complete, the attributes job is done. <br/>
Property values however can change. <br/>

—-Property Binding: <br/>
You can bind to the property of a DOM element. <br/>
You can bind class attribute values to the Property of a DOM element. <br/>
Ex: <input type=“text” [id]=“myId” value=“Santosh”> <br/>
You can also use interpolation for above example: <br/>
<input type=“text” id=“{{myId}}” value=“Santosh”> <br/>
But interpolation works with only String. There are few DOM properties which are of type boolean. <br/>

Instead of using [] for property binding you can use bind- <br/>
Ex: <br/>
<input type=“text” bind-id=“myId” value=“Santosh”> <br/>

Similarly you can use the property binding for css class binding. <br/>
Example: <br/>
template: `
    <h2>
      Welcome {{name}}
    </h2>
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
‘ 
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

export class TestComponent implements OnInit { <br/>

  public name ="Santosh"; <br/>
  public siteUrl = window.location.href; <br/>
  public myId="testId1"; <br/>
  public isDisabled=false; <br/>
  public successClass="text-success"; <br/>
  public hasError=true; <br/>

  constructor() { } <br/>

  ngOnInit(): void { <br/>
  } <br/>

  greetUser(){ <br/>
    return "Hello " + this.name; <br/>
  } <br/>

}<br/>

—Similarly if we have to apply multiple classes conditionally Angular provides ngClass directive. <br/>

—A Directive is a custom html attribute that angular provides. <br/>

Example: <br/>
template: `
<h2 [ngClass]="messageClasses">
      CodeVolution
    </h2>

` 
<br/>
export class TestComponent implements OnInit { <br/>

  public name ="Santosh"; <br/>
  public siteUrl = window.location.href; <br/>
  public myId="testId1"; <br/>
  public isDisabled=false; <br/>
  public successClass="text-success"; <br/>
  public hasError=true; <br/>
  public isSpecial = true; <br/>
  public messageClasses ={
    "text-success":!this.hasError, 
    "text-danger":this.hasError, 
    "text-special":this.isSpecial 
  } <br/>

  constructor() { } <br/>

  ngOnInit(): void { <br/>
  } <br/>

  greetUser(){ 
    return "Hello " + this.name; <br/>
  } 
 <br/>
} 
<br/>

So class binding is really useful bcos it allows to add or remove classes to html elements based on interactions or state of your application. <br/>

—Style binding is used to apply inline styles to html elements. <br/>
Example: <br/>
template:`
<h2 [style.color]="'orange'">
    Style Binding
    </h2>
`

—Conditional style Binding: <br/>
template:`
 <h2 [style.color]="hasError ? 'red' : 'green' ">
    Conditional Style Binding
    </h2>
`
<br/>
You can also assign component class properties during style binding. <br/>

Example: <br/>

template:`
<h2 [style.color]="highlightColor">
      Style Binding 2
    </h2>
`
export class TestComponent implements OnInit { <br/>

  public name ="Santosh"; <br/>
  public siteUrl = window.location.href; <br/>
  public myId="testId1"; <br/>
  public isDisabled=false; <br/>
  public successClass="text-success"; <br/>
  public hasError=true; <br/>
  public isSpecial = true; <br/>
  public messageClasses ={
    "text-success":!this.hasError, <br/>
    "text-danger":this.hasError, <br/>
    "text-special":this.isSpecial <br/>
  }
  <br/>
  public highlightColor="orange"; <br/>

  constructor() { } 
  <br/>

  ngOnInit(): void {
  } 
  <br/>

  greetUser(){
    return "Hello " + this.name; 
  } 
  <br/>

} <br/>

To apply multiple styles we can use ngStyle directive similar to ngClass Directive. <br/>

Example: <br/>
template:` 
<h2 [ngStyle]="titleStyles">
      Directive Style Binding
    </h2>
`
<br/>
export class TestComponent implements OnInit { <br/>

  public name ="Santosh"; <br/>
  public siteUrl = window.location.href; <br/>
  public myId="testId1"; <br/>
  public isDisabled=false; <br/>
  public successClass="text-success"; <br/>
  public hasError=true; <br/>
  public isSpecial = true; <br/>
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  } 
  <br/>
  public highlightColor="orange"; 
  <br/>
  public titleStyles={
    color: "blue",
    fontStyle: "italic"
  } 
  <br/>

  constructor() { } <br/>

  ngOnInit(): void {
  } 
  <br/>

  greetUser(){
    return "Hello " + this.name;
  } 
  <br/>

} 
<br/>

-—Data Binding is from class to the template(html view). <br/>
 But sometimes we need the other way around like from html view to class. This is required in response to events on the html. This is known as Event Binding. <br/>
 
Example: <br/>
template:`
 <button (click)="onClick()">Greet</button>
    {{greeting}}
` 
<br/>

export class TestComponent implements OnInit { <br/>

  public greeting= ""; <br/>
  constructor() { } <br/>

  ngOnInit(): void {
  } 
  <br/>

  onClick(){ 
    console.log("Welcome to Codevolution!!");
    this.greeting = "Welcome to Codevolution!!";
  }

} 
<br/>
You can also capture the information about the event itself <br/>

Example: <br/>
template:` 
 <button (click)="onClick($event)”>Greet</button>
    {{greeting}}
` 
<br/>

export class TestComponent implements OnInit { <br/>
  public greeting= ""; <br/>
  constructor() { }  <br/>

  ngOnInit(): void {
  } 
  <br/>

  greetUser(){
    return "Hello " + this.name;
  } 
  <br/>

  onClick(event){
    console.log("Welcome to Codevolution!!");
    this.greeting = event.type;
  } 
  <br/>

} 
<br/>

--Instead of assigning event handler to an event you can directly assign template statement. <br/>
 <button (click)="greeting='Welcome Santosh!'">Greet</button> <br/>

--Template reference variables: <br/>
Reference variable can be used to refer to a html element and all of its DOM properties. <br/>
The way to create reference variable is to use: #myInputText <br/>

Example: <br/>
template: `
<input #myInputText type="text">
    <button (click)="logMessage(myInputText.value)">Log Message</button>
    {{loggedMessage}}
` 
<br/>

export class TestComponent implements OnInit {
  public loggedMessage="";
  constructor() { } 

  ngOnInit(): void {
  } 
  <br/>

  logMessage(message){
    console.log(message);
    this.loggedMessage=message;
  } 
  <br/>

} 
<br/>

-—Two way property binding using ngModel directive <br/>
Sometimes we want our model and view to be in sync. <br/>
Example: For username and password fields <br/>
We have property binding to bind class attribute values to view <br/>
We have event binding to bind html element values to class attribute values <br/>
Combining both these concepts is the usage of ngModel Directive <br/>
You will need to import Forms Module in your root module(app.module.ts) <br/>

In your component: <br/>

template: `
 <input [(ngModel)]="username" type="text">
    {{username}}
 `

export class TestComponent implements OnInit {
   public username = ""; 
  constructor() { }
 <br/>
  ngOnInit(): void {
  }

}

-—Structural Directives <br/>
These are directives that let you add or remove HTML elements from the DOM. <br/>
ngIf, ngSwitch and ngFor <br/>


ngIf Example: <br/>
template: `
  <h2 *ngIf=“true">
    Codevolution
  </h2>
  `,
  <br/>

If the above condition is changed to false the h2 element itself is removed from the DOM. <br/>

ngSwitch Example: <br/>
template: `
 <div [ngSwitch]="color">
    <div [style.color]="'red'" *ngSwitchCase="'red'">You picked red color</div>
    <div [style.color]="'blue'" *ngSwitchCase="'blue'">You picked blue color</div>
    <div [style.color]="'green'" *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick color again</div>
  </div>
  `, 
  <br/>

export class TestComponent implements OnInit { <br/>
  public color="green"; <br/>
  constructor() { } <br/>

  ngOnInit(): void { <br/>
  } <br/>

} <br/>

ngIf and ngSwitch conditionally render html elements. <br/>
 
ngFor Directive renders list of HTML elements. <br/>

Example: <br/>
template: `
 <div *ngFor="let colour of colours;index as i;">
    <h2>{{i}} {{colour}}</h2>
  </div> 


` 
<br/>
 export class TestComponent implements OnInit { <br/>

  public colours = ["red","blue","green","yellow"]; <br/>
  constructor() { } <br/>

  ngOnInit(): void { <br/>
  } <br/>

} <br/>
 
—Component interaction <br/>
Generally in angular application components are independent. So there will be one root component or parent component and multiple child components. <br/>
Sometimes there is need for components to share data between each other. This is done using @Input and @Output decorators. <br/>
Using the @Input decorator the child component can accept the input from the Parent component. <br/>
Using the @Output decorator the child component can send data to the Parent component. <br/>

Let us take below example where we have two components: <br/>
1. Parent component - app.component.ts and app.component.html <br/>
2. Child component - test.component.ts and test.component.html <br/>

From the Parent component we send name to child component <br/>

So in app.component.ts <br/>

import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl : './app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  title = 'app',
  public name = "Santosh";
}

In app.component.HTML

<div style="text-align:center">
  <h1>
    Welcome to {{title}}
  </h1>
</div>
<app-test [parentData]="name"></app-test>

So in the selector of the child component we bound the name property using parentData property

To recieve this in test component do the following in test.component.ts

import {Component,OnInit,Input} from '@angular/core';

@Component({
  selector:'app-test',
  template : `
    <h2>{{"Hello "+parentData}}</h2>
  `,
  styles:[``]
})

export class TestComponent{
  @Input() public parentData;
  constructor(){}
  ngOnInit(){}
}

Notice the use of @Input Decorator which makes this attribute special
So we sent the data from the parent component to the child component and displayed in the child component.
We can also use alias and give different name to the property in the child component :
@Input('parentData') public name;

Similarly we can also send data from child component to the parent component:
Child component sends data to parent component using events.
So in the test.component.ts create new instance of event emitter class.
Use output decorator for the event instance.
And fire this event on button click.

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'app-test',
  template : `
    <h2>{{"Hello "+parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles:[``]
})

export class TestComponent{
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor(){}
  ngOnInit(){}
  public fireEvent(){
    this.childEvent.emit("Hey CodeVolution!");
  }
}
Now that that the event is emitted on button click we need to capture it in the parent component

Lets go to the parent component html : app.component.HTML

<div style="text-align:center">
  <h1>
    Welcome to {{title}}
    {{message}}
  </h1>
</div>
<app-test (childEvent)="message=$event" [parentData]="name"></app-test>

So on click of Send Event button in child component the message : Hey CodeVolution! is displayed in the parent component HTML


—Pipes
Pipes allow us to transform data before displaying them in the view.
Pipe operator transforms data only for the view. It does not change the underlying class attribute value.
Example: Below is example of few commonly used pipe operators


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2>

    <h2>{{name | slice:3}}</h2>
    <h2>{{name | slice:3:6}}</h2>

    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>

    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'GBP'}}</h2>
    <h2>{{0.25 | currency: 'GBP':'code'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public message = "Welcome to codevolution";
  public person ={
    "firstName":"John",
    "lastName":"Doe"
  }
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

—Services
Services are required so that data can be shared across components.
A component should be responsible for controlling only the view and not the data for the view.
A Service is required to implement application logic.
Ex: From date of birth of employee lets say we need to calculate age.
This kind of logic can be implemented in service.
We can also use services for external interaction such as connecting to a database.

Naming convention: <fileName>.service.ts

—Service is used through Dependency Injection
Example: Steps for using Employee Service
1. Define the EmployeeService class
2. Register with the injector
3. Declare as dependency in EmpList and EmpDetail component classes.

To generate a service in any angular project angular cli command is:
 ng g s employee

This creates employee.service.ts and employee.service.spec.ts

Always register your service at the  root module AppModule level.

Because if you register with AppComponent and in future if your application gets multiple modules then it will not work.

Similarly if you register at a particular component level like EmpList or EmpDetail in this example then it is available only to the child components of the register component.

To register a service we use the Providers meta data  in the AppModule.(app.module.ts)

So we have registered a  service with the angular injector using Providers metadata.

The service class employee.service.ts will have @Injectable decorator.
This is a very important decorator if EmployeeService has other service dependencies.

—Http and observables
In real world applications angular service class will make http call to some web server to get data.
This is returned as observable and we will have to cast this observable to our custom list objects.

—What is an observable
An observable is nothing but sequence of items that arrive asynchronously over time.
But with a http call its a single item instead of sequence of items.
And that single item is nothing but Http Response.

Components need to subscribe to the service to get the data.

For example: EmpList and EmpDetail components need to subscribe to EmployeeService to get the observable.

1. Http Get Request from EmployeeService
2. Receive the observable from and cast it to Employee array
3. Subscribe to the observable from the EmpList and EmpDetail
4. Assign the employee array to local variable.

—RxJS is a library for Reactive Extensions for JavaScript
—External library to work with Observables in Angular application.

—Summary of changes required to make http call from service and subscribe to observable and get array data in the components
1. First import HttpClientModule in AppModule and include it.
2. Next we inject it as a dependency in the EmployeeService(in the constructor)
3. So now we have an instance of HttpClient which we are referring to using the http variable.
4. We invoke the get request passing the URL where the request has to be made.
5. The GET method returns Observable but we need to convert it into Employee array object by creating interface and cast the Observable into an array of employees.
6. So now we have a method getEmployees() in the Employee Service that returns Observable.
7. The Observable does not provide data unless someone subscribes to it.
8. In the EmployeeList and EmpDetail components we subscribe to it.
9. From the observable we get the employee data asynchronously.
10. We assign that data to a property in the component class and bind it to the view.

—Error handling in service class
1. Catch the exception on the observable and throw it to the components that have subscribed to the Observable.
2. Display the error message in the components that have subscribed.


Example of Service employee.service.ts:

import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employees.json";

  constructor( private http: HttpClient) {

  }

  getEmployees():Observable<IEmployee[]>{



    return this.http.get<IEmployee[]>(this._url).pipe(retry(1),catchError(this.errorHandler));



    /* return[
      {"id":1, "name": "Andrew", "age":30},
      {"id":2, "name": "Brandon", "age":25},
      {"id":3, "name": "Christine", "age":26},
      {"id":4, "name": "Elena", "age":28}
    ]
 */
  }

  errorHandler(error: HttpErrorResponse){
    let errorMsg = "";
    if(error.message == ""){
      errorMsg = "Server Error";

    }else{
      errorMsg = error.message;
    }
    return throwError(errorMsg);
  }
}

--Example of employee interface employee.ts
export interface IEmployee{
    id: number,
    name: string,
    age: number
}


--Example of app.module.ts with service registered under Providers metadata:

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

--Example of employee-detail.component.ts which has subscribed to this service

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
  <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
        <li>{{employee.id}} {{employee.name}}-{{employee.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
      error => this.errorMsg = error);
  }

}

--Example of employee-list.component.ts which has subscribed to this service

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
      error => this.errorMsg = error);
  }

}

—Routing In Angular
Angular application will have multiple components and corresponding views.
We need a way to navigate to different views based on user action.

For Example:
 Consider two components departments and employees
When user clicks on Departments button or navigates to url: http://localhost:4200/departments
We display DepartmentList component
When user clicks on Employees button or navigates to url:
http://localhost:4200/employees
We display EmployeeList component

Following are the steps to implement this requirement:
1. Generate a project with Routing option.
2. Generate departmentList and employeeList components.
3. Configure the routes on our application which will allow us to navigate to the routes from the Url.
4. We add buttons and use directives to navigate to the configured routes.

<router-outlet></router-outlet>
The above tag in the app.component.html is where the components corresponding to the routes will be displayed.

Two directives which are useful are: routerLink and routerLinkActive.These will be used to navigate through buttons.


For Example: app.component.html


<div style="text-align: center;">

  <h1>Routing and Navigation</h1>
</div>
<nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <br>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
</nav>

<router-outlet></router-outlet>
<!--Routed views go here-->

—Using wild card routes you can handle invalid urls in the application
—Wild card route should be the last route in the configuration
—Empty path route should be at the top and provide default component to be displayed

For Example: app-routing.module.ts

const routes: Routes = [
  {path:'', component: DepartmentListComponent},
  {path:'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path:'**', component: PageNotFoundComponent}
];


—Instead of specifying component for empty path route you can specify redirectTo url
For Example: app-routing.module.ts

const routes: Routes = [
  {path:'', redirectTo: '/departments', pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path:'**', component: PageNotFoundComponent}
];

—Route parameters
Now lets say if we want to display department detail component on click of every department in the department-list component then we need to use route parameters
Like departments/id

For Example: app-routing.module.ts
const routes: Routes = [
  {path:'', redirectTo: '/departments', pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {path:'departments/:id', component: DepartmentDetailComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path:'**', component: PageNotFoundComponent}
];

--For this we make use of route parameters
In the department list component below is the change that we make using on click events

For Example: department-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ],
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSelect(department){
    this.router.navigate(['/departments',department.id])
  }

}

--Steps for passing rout parameters and using them
1. In app routing module we create a route with placeholder for the parameter value
2. To pass a parameter while navigating we make use of Router service
3. To read the parameters we make use of the ActivatedRoute service

--Example of using activated route to read the route parameter in department-detail.component.ts:

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;

  }

}

--Drawback of using snapshot approach
Let us say we need to implement navigation to previous and next department detail in department-detail.component.ts
Basically we will add two buttons Previous and Next and implement logic as shown below:
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;

  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);
  }

}

--ParamMap observable
--However with this approach after clicking the Previous and next button though the route url changes with updated id the detail component view does not get updated to reflect the details of the corresponding department
When we navigate from one component to the same component the snapshot approach will not work
This is because angular is going to figure out if it can initialize new component or reuse the same component
When we navigate back to the same component Angular simply reuses the same component.
No initialization implies the ngOnInit method does not get called
Hence the new id will never be retrieved from the url.

--To overcome the above issue we use paramMap observable
--For Example department-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });


  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);
  }

}

--Now with the paramMap observable even when we navigate back to the same component it can detect and change the department id

--Optional Route parameters
Let us say we need to implement requirement such that we need a back button in the department detail component on click of which we should be navigated back to the department list component and the selected id should be highlighted.
This can be achieved using optional route parameters
They are called optional because their existence does not affect the view but they can be used to apply some logic to the view

--Below will be the change in department-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>

    <div>
    <button (click)="goToDepartments()"> Back </button>
    </div>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });


  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //Below is the example of optional route parameters
    this.router.navigate(['/departments',{id: selectedId}]);
  }

}


--Below will be the change in departement-list.component.ts to read the optional route paramter and highlight the corresponding department if present in the list:
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ],
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //The below change is for reading the optional route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  public onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
--Also keep in mind that the optional route parameter does not need placeholder to configure the route in app routing module.

--Relative Navigation
So far we learnt about absolute navigation and we can identity that because of the usage of forward slash / in the Routes.
When we use absolute navigation there is one small drawback which is lack of flexibility in our routes.
If we decide to change our route name like from /departments to /department-list we will not only have to modify in app routing module but all occurences of that absolute path in the components making use of that route.
To add flexibility we make use of relative Navigation.
Advantage with this approach is we need to modify route names only in app routing module and need not worry that anything will break.

--For Example in department-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ],
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  public onSelect(department){
    //this.router.navigate(['/departments',department.id]);
    //The below change basically means we dont care what the url is but to the current route append the department id and then navigate to that url
    this.router.navigate([department.id],{relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}

--For Example in department-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>

    <div>
    <button (click)="goToDepartments()"> Back </button>
    </div>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });


  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);

  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);


  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //Below is the example of optional route parameters
    //this.router.navigate(['/departments',{id: selectedId}]);
    //go back one segment in the url
    this.router.navigate(['../',{id : selectedId}],{relativeTo: this.route});
  }

}

--Child routes
If we need to display some components within some existing Components
--For Example in the department detail component if we need to display each department's overview and contact details
We will make two separate components and the routes for these components will be children of the department detail component route
So in order to display the child routes you will have to use the <router-outlet></router-outlet> tag in the parent component

--Example of changes in app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';


const routes: Routes = [
  {path:'', redirectTo: '/departments', pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {path:'departments/:id',
    component: DepartmentDetailComponent,
    children:[
      {path:'overview', component: DepartmentOverviewComponent},
      {path:'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeListComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent]

--Example of changes in department-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()"> Previous </button>
      <button (click)="goNext()"> Next </button>
    </p>
    <div>
    <button (click)="goToDepartments()"> Back </button>
    </div>
  `,
  styles: [
  ],
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });


  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments',previousId]);

  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments',nextId]);


  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //Below is the example of optional route parameters
    //this.router.navigate(['/departments',{id: selectedId}]);
    //go back one segment in the url
    this.router.navigate(['../',{id : selectedId}],{relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }

}

--This completes the changes for child Routes overview and contact
