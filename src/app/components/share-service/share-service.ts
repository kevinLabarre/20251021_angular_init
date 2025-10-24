import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data-service';

@Component({
  selector: 'app-share-service',
  imports: [],
  templateUrl: './share-service.html',
  styleUrl: './share-service.css',
})
export class ShareService implements OnInit {

  constructor(private shareService: ShareDataService) { }

  data: string = ""

  ngOnInit(): void {
    this.shareService.shareData("Donnée envoyée par le composant")

    this.setData();

  }


  setData() {
    this.shareService.dataShareByShareService$.subscribe(resp => {
      this.data = resp
    })
  }



}
