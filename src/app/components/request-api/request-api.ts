import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NewsCard } from "../../news-card/news-card";

@Component({
  selector: 'app-request-api',
  imports: [NewsCard],
  templateUrl: './request-api.html',
  styleUrl: './request-api.css'
})
export class RequestApi implements OnInit {
  news: any[] = []
  error?: Error;


  // Angular gère automatiquement l'injection de dépendance via le constructeur
  // Cela nous permet d'avoir accès à une instance de HttpClient dans notre composant
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }


  // Le onInit est appelé juste après le constructeur
  // Recommandation d'angular : Utiliser le ngOnInit (et pas le constructeur)
  //    - si on souhaite utiliser une dépendance injecté par angular
  //    - si on souhaite modifier les valeurs de nos variables de class ou accéder à nos méthodes de class
  ngOnInit(): void {
    this.loadNews()
    // this.loadNewsAsync()
  }

  loadNews() {
    console.log("Lancement du chargement des nouvelles")
    // this.http.get<any[]>("http://localhost:3000/actualites").subscribe((resp) => {
    //   this.news = resp
    //   console.log(this.news)
    // })

    this.http.get<any[]>("http://localhost:3000/actualites").subscribe({
      next: (resp) => {   // Fonction se déclenchera QUE si on a retour OK
        this.news = resp
        console.log(this.news)
      },
      error: (e) => {  // Fonction se déclenchera si on a un retour 'erreur'
        this.error = e
        console.log("this.error ==> ", this.error!.message)
      },
      complete: () => { // Fonction se déclenchera QUAND la requête est terminée (qu'on est une erreur ou non) }
        this.cdr.detectChanges() // Pour forcer 'angular' à mettre à jour notre vue
      }
    })

  }

  // async loadNewsAsync() {
  //   this.news = await firstValueFrom(this.http.get<any[]>("http://localhost:3000/actualites"))
  // }

}
