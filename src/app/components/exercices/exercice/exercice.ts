import { Component } from '@angular/core';
import { ProductList } from "../product-list/product-list";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-exercice',
  imports: [ProductList, FormsModule],
  templateUrl: './exercice.html',
  styleUrl: './exercice.css'
})
export class Exercice {

  constructor() {
    this.setFruits()
    this.setLegumes()
  }

  produits: any[] = [
    { id: 1, nom: 'Pomme', quantite: 0, type: 'fruit', prix: 1.2 },
    { id: 2, nom: 'Banane', quantite: 6, type: 'fruit', prix: 0.9 },
    { id: 3, nom: 'Orange', quantite: 8, type: 'fruit', prix: 1.5 },
    { id: 4, nom: 'Fraise', quantite: 20, type: 'fruit', prix: 2.5 },
    { id: 5, nom: 'Carotte', quantite: 0, type: 'legume', prix: 0.8 },
    { id: 6, nom: 'Tomate', quantite: 12, type: 'legume', prix: 1.0 },
    { id: 7, nom: 'Poivron', quantite: 5, type: 'legume', prix: 1.3 },
    { id: 8, nom: 'Brocoli', quantite: 0, type: 'legume', prix: 1.8 }
  ];

  checkBoxValue: boolean = true

  fruits: any[] = []
  legumes: any[] = []

  filterProduitsByType(type: string) {
    return this.produits.filter(p => {
      if (this.checkBoxValue) {
        return p.type === type
      } else {
        return p.type === type && p.quantite > 0
      }
    })
  }

  setFruits() {
    this.fruits = this.filterProduitsByType("fruit")
  }

  setLegumes() {
    this.legumes = this.filterProduitsByType("legume")
  }

  handleCheckbox() {
    this.setFruits();
    this.setLegumes();
  }

}
