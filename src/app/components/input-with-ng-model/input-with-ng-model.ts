import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input-with-ng-model',
  imports: [FormsModule],
  templateUrl: './input-with-ng-model.html',
  styleUrl: './input-with-ng-model.css'
})
export class InputWithNgModel {
  name = ""
  checkBoxValue = false

  handleReset() {
    this.name = ""
  }

  // Fonction appelée à chaque changement de valeur de l'input côté navigateur
  // --> donc à chaque fois qu'on ajoute ou supprime un caractère
  handleModelChange(inputValue: string) {
    console.log("input Value : ", inputValue)
    console.log("name :", this.name)
  }

}
