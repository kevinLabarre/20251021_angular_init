import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) news!: INews

  constructor(private service: NewsService) { }

  handleDelete() {
    this.service.deleteNews(this.news.id).subscribe(resp => console.log(resp))
  }

}
