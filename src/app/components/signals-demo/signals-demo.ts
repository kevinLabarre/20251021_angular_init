import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { NewsService } from '../../services/news-service';
import { NewsCard } from '../News/news-card/news-card';

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
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.loadNews()
  }

  news: WritableSignal<INews[]> = signal([])

  loadNews() {
    this.service.getNews().subscribe({
      next: (resp) => this.news.set(resp),
      error: (e) => console.error(e.message)
    })
  }
}
