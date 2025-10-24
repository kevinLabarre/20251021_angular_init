import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant-output',
  imports: [],
  templateUrl: './enfant-output.html',
  styleUrl: './enfant-output.css',
})
export class EnfantOutput implements OnInit {
  @Output() dataFct = new EventEmitter<string>()

  // Dans un projet réel,EVITER D'APPELR LA FONCTION DANS LE CONSTRUCTEUR OU LE ONINIT
  // on déclenche les fonctions Output dans un évènement
  ngOnInit(): void {
    // Pour déclencher la fonction passée par le parent via le '@Output'

    // Attention peut déclancher une erreur, car la donnée est affichée par le parent
    // ET on modifie directement la valeur dans le onInit ()
    this.passData();
  }

  passData() {
    this.dataFct.emit("Données passées par le composant enfant !")
  }

  handleClick() {
    this.dataFct.emit("Données passées par le composant enfant ! * 2")
  }

}
