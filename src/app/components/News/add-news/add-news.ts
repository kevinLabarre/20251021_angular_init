import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '../../../interfaces/INews';
import { NewsService } from '../../../services/news-service';

@Component({
  selector: 'app-add-news',
  imports: [ReactiveFormsModule],
  templateUrl: './add-news.html',
  styleUrl: './add-news.css',
})
export class AddNews {
  constructor(private service: NewsService) { }

  displayForm: boolean = false

  handleDisplayForm() {
    this.displayForm = true
  }

  // LES FORMULAIRES SUR ANGULAR
  newsForm = new FormGroup({
    titre: new FormControl(""), // "" -> valeur présente dans l'input au démarrage du composant
    texte: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    image: new FormControl("", Validators.required),
    categorie: new FormControl("", Validators.required)
  })

  handleSubmit() {
    if (this.newsForm.valid) {

      const result: INews = {
        titre: this.newsForm.value.titre || "",
        texte: this.newsForm.value.texte || "",
        image: this.newsForm.value.image || "",
        categorie: this.newsForm.value.categorie || "",
        dateModification: new Date(),
        datePublication: new Date()
      }

      // Lancer la requpete POST pour ajouter 'result'
      this.service.addNews(result).subscribe((resp) =>
        console.log("News ajoutée avec succès", resp)
      )
    } else {
      console.log("Erreur de remplissage")
    }
  }

  get textRequiredError() {
    const errors = this.newsForm.get("texte")!.errors
    if (errors) {
      return errors['required']
    } else false
  }

  get textTouched() {
    return this.newsForm.get("texte")?.touched
  }

}
