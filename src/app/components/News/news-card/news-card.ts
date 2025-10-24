import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsService } from '../../../services/news-service';
import { INews } from '../../../interfaces/INews';


@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) news!: INews

  @Output() deleteOneNews = new EventEmitter<number>()

  constructor(private service: NewsService) { }

  handleDelete(): void {
    if (this.news.id) {
      this.service.deleteNews(this.news.id).subscribe({
        next: resp => {
          this.deleteOneNews.emit(resp.id)
        }
      })
    }


  }

}
