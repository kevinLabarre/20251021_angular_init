import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NewsCard } from '../news-card/news-card';
import { NewsService } from '../../../services/news-service';
import { AddNews } from "../add-news/add-news";

@Component({
  selector: 'app-request-api',
  imports: [NewsCard, AddNews],
  templateUrl: './request-api.html',
  styleUrl: './request-api.css'
})
export class RequestApi implements OnInit {
  news: any[] = []
  error?: Error;


  // Angular gère automatiquement l'injection de dépendance via le constructeur
  // Cela nous permet d'avoir accès à une instance de HttpClient dans notre composant
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private service: NewsService
  ) { }


  // Le onInit est appelé juste après le constructeur
  // Recommandation d'angular : Utiliser le ngOnInit (et pas le constructeur)
  //    - si on souhaite utiliser une dépendance injecté par angular
  //    - si on souhaite modifier les valeurs de nos variables de class ou accéder à nos méthodes de class
  ngOnInit(): void {
    this.loadNews()
    // this.loadNewsAsync()
    // this.loadWithService()
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

  async loadNewsAsync() {
    this.news = await firstValueFrom(this.http.get<any[]>("http://localhost:3000/actualites"))
  }

  // Dans un projet réel, nous utiliserons des services
  loadWithService() {
    this.service.getNews().subscribe((resp) => {
      this.news = resp
      this.cdr.detectChanges() // Pour forcer 'angular' à mettre à jour notre vue
    })
  }

  // Fonction lié à l'output du composant NewsCard
  // objectif : le composant enfant envoie, à chaque suppression l'id
  // de la news supprimée
  handleDeleteOneNews(id: number) {

    // id reçu en param, est l'id de la news supprimé
    this.news = this.news.filter(n => n.id !== id)
  }

}
