import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { ParentEtEnfant } from './components/parent-et-enfant/parent-et-enfant';
import { DirectiveIf } from './components/directive-if/directive-if';
import { DirectiveFor } from './components/directive-for/directive-for';
import { PropAndEventBinding } from './components/prop-and-event-binding/prop-and-event-binding';
import { Compteur } from './components/compteur/compteur';
import { InputWithNgModel } from './components/input-with-ng-model/input-with-ng-model';
import { Exercice } from './components/exercices/exercice/exercice';
import { RequestApi } from './components/request-api/request-api';
import { SignalsDemo } from './components/signals-demo/signals-demo';

export const routes: Routes = [
  { path: "", component: First },
  { path: "composant-parent-enfant", component: ParentEtEnfant },
  { path: "directive-if", component: DirectiveIf },
  { path: "directive-for", component: DirectiveFor },
  { path: "bind-des-props-et-evevenements", component: PropAndEventBinding },
  { path: "compteur", component: Compteur },
  { path: "input-avec-ng-model", component: InputWithNgModel },
  { path: "exercice", component: Exercice },
  { path: "requete-api", component: RequestApi },
  { path: "signals", component: SignalsDemo }
];
