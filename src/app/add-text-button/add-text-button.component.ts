import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-text-button',
  templateUrl: './add-text-button.component.html',
  styleUrls: ['./add-text-button.component.css']
})
export class AddTextButtonComponent implements OnInit {

  addText = false;

  constructor() { 
    setTimeout(() => {
      this.addText = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

}
