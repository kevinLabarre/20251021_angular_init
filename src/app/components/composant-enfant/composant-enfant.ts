import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  imports: [],
  templateUrl: './composant-enfant.html',
  styleUrl: './composant-enfant.css'
})
export class ComposantEnfant {
  // @Input() user: any;
  // @Input({ required: true }) userInput: { firstName: string, lastName: string } = { firstName: 'valeur par défaut', lastName: "valeur par défaut" }

  // Le ' ! ' permet d'indiquer à typescript que la variable ne sera jamais null ou undefined
  @Input({ required: true }) userInput!: { firstName: string, lastName: string }
}
