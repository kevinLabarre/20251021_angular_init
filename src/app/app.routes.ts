import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { ParentEtEnfant } from './components/parent-et-enfant/parent-et-enfant';
import { DirectiveIf } from './components/directive-if/directive-if';
import { DirectiveFor } from './components/directive-for/directive-for';

export const routes: Routes = [
  { path: "", component: First },
  { path: "composant-parent-enfant", component: ParentEtEnfant },
  { path: "directive-if", component: DirectiveIf },
  { path: "directive-for", component: DirectiveFor }
];
