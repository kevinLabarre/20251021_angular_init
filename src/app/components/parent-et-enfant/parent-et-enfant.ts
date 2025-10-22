import { Component } from '@angular/core';
import { ComposantEnfant } from "../composant-enfant/composant-enfant";


@Component({
  selector: 'app-parent-et-enfant',
  imports: [ComposantEnfant],
  templateUrl: './parent-et-enfant.html',
  styleUrl: './parent-et-enfant.css'
})
export class ParentEtEnfant {
  user: { firstName: string, lastName: string } = {
    firstName: "John",
    lastName: 'Doe'
  }
}
