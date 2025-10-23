import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-request-api',
  imports: [],
  templateUrl: './request-api.html',
  styleUrl: './request-api.css'
})
export class RequestApi {
  constructor(private http: HttpClient) {
    // this.loadNews()
    this.loadNewsAsync()
  }

  // Angular gère automatiquement l'injection de dépendance via le constructeur
  // Cela nous permet d'avoir accès à une instance de HttpClient dans notre composant

  news: any[] = []

  loadNews() {
    console.log("Lancement du chargement des nouvelles")
    this.http.get<any[]>("http://localhost:3000/actualites").subscribe((resp) => {
      this.news = resp
      console.log(this.news)
    })
  }

  async loadNewsAsync() {
    this.news = await firstValueFrom(this.http.get<any[]>("http://localhost:3000/actualites"))
  }

}
