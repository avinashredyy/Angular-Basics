import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-text-button',
  templateUrl: './add-text-button.component.html',
  styleUrls: ['./add-text-button.component.css']
})
export class AddTextButtonComponent implements OnInit {

  addText = false;
  exampleText = 'Original text!';
  inputText = '';
  ngModelInputText = '';
  showNgIfText = false;
  ngIfExampleText = 'ngIf example text!';

  constructor() { 
    setTimeout(() => {
      this.addText = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onButtonClick = () => {
    this.exampleText = 'Modified text after clicking on the button!';
  }

  onButtonClickForNgIf = () => {
    this.showNgIfText = true;
  }

  onInput = (event: any) => {
    this.inputText = event.target.value;
  }

}
