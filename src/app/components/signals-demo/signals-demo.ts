import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { HttpClient } from '@angular/common/http';
import { NewsCard } from "../../news-card/news-card";

@Component({
  selector: 'app-signals-demo',
  imports: [NewsCard],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css',
})
export class SignalsDemo implements OnInit {

  // EXEMPLE 1: COMPTEUR
  count: WritableSignal<number> = signal(0) // 0 est ma valeur initiale
  // count = signal(0)  // Sur bcp d'exemples donnés par la doc angular, les signaux ne sont pas typés

  increment() {
    this.count.update((prevValue) => prevValue + 1)
  }

  decrement() {
    this.count.update((prev) => prev - 1)
  }

  reset() {
    this.count.set(0)
  }

  // EXEMPLE 2: Requete API et utilisation d'un signal
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  news: WritableSignal<INews[]> = signal([])

  loadProducts() {
    this.http.get<INews[]>("http://localhost:3000/actualites").subscribe({
      next: (resp) => this.news.set(resp),
      error: (e) => console.error(e.message)
    })
  }

}
