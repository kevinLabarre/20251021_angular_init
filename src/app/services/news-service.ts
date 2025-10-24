import { Injectable } from '@angular/core';
import { INews } from '../interfaces/INews';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/actualites"

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.baseUrl)
  }

  deleteNews(id: number): Observable<INews> {
    return this.http.delete<INews>(`${this.baseUrl}/${id}`)
  }

  addNews(news: INews): Observable<INews> {
    return this.http.post<INews>(this.baseUrl, news)
  }

}
