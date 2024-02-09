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
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '023456789';
    const symbols = '!@#$%^&*()?/';

    let validCharacters = '';

    if (this.includeLetters) {
      validCharacters += letters;
    }
    if (this.includeNumbers) {
      validCharacters += numbers;
    }
    if (this.includeSymbols) {
      validCharacters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i += 1) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }
    this.password = generatedPassword;
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
