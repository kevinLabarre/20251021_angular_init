import { Component } from '@angular/core';
import { EnfantOutput } from "../enfant-output/enfant-output";

@Component({
  selector: 'app-output',
  imports: [EnfantOutput],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {

  data?: string

  passDataFct(text: string) {
    console.log("donnée passée par l'enfant: ")
    this.data = text
  }

}
