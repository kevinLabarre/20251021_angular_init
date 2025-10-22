import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-and-event-binding',
  imports: [],
  templateUrl: './prop-and-event-binding.html',
  styleUrl: './prop-and-event-binding.css'
})
export class PropAndEventBinding {

  // Sur angular, on part directement du répertoire 'public'
  imgSrc: string = "favicon.ico"

  buttonDisabled: boolean = false;

  handleClick() {
    this.buttonDisabled = !this.buttonDisabled
  }

}
