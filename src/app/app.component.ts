import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onButtonClick() {
    this.password = 'my password';
    console.log(this.includeSymbols);
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(eventTarget: EventTarget): void {
    const value: string = (eventTarget as HTMLInputElement).value;
    const length = Number(value);
    if (Number.isInteger(length)) {
      this.passwordLength = length;
    }
  }
}
