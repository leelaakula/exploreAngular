import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 0;
  clickMe() {
    this.count++;
  }
}
export function compute(number) {
  if (number < 0) {
    return 0;
  }
  return number++;
}
export function greet(name) {
  return 'welcome ' + name;
}
export function getCurrencies() {
  return ['shit', 'fucking', 'bitch'];
}
