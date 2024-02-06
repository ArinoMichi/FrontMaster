import { Component } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent {
  public numeros: number[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      var aux = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(aux);
    }
  }
}
