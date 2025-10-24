import { Component } from '@angular/core';
import { ComposantEnfant } from "../composant-enfant/composant-enfant";
import { Output } from "../output/output";

@Component({
  selector: 'app-parent-et-enfant',
  imports: [ComposantEnfant, Output],
  templateUrl: './parent-et-enfant.html',
  styleUrl: './parent-et-enfant.css'
})
export class ParentEtEnfant {
  user: { firstName: string, lastName: string } = {
    firstName: "John",
    lastName: 'Doe'
  }
}
