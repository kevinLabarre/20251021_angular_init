import { Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css',
})
export class SignalsDemo {

  count: WritableSignal<number> = signal(0) // 0 est ma valeur initiale
  // count = signal(0)  // Sur bcp d'exemples donnés par la doc angular, les signaux ne sont pas typés

  increment() {
    this.count.update((prevValue) => prevValue + 1)
  }

  reset() {
    this.count.set(0)
  }

}
