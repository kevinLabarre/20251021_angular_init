import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  // Le BehaviorSubject est utilisé pour stocker la donnée partagée
  private data = new BehaviorSubject<string>("") // "" est la valeur initiale

  shareData(data: string) {
    this.data.next(data) // Pour remplacer la dernière valeur par une nouvelle
  }

  dataShareByShareService$ = this.data.asObservable() // Observable prévu pour que les composants puissent s'abonner au BehaviorSubject(qui contient la donnée partagée)

}
