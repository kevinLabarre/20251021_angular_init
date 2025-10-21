import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { ParentEtEnfant } from './components/parent-et-enfant/parent-et-enfant';

export const routes: Routes = [
  { path: "", component: First },
  { path: "composant-parent-enfant", component: ParentEtEnfant }
];
