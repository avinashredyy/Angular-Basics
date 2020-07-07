import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'Avinash';
  age: number = 27;

  getAge() {
    return this.age;
  }

}
