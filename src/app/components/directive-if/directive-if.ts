import { Component } from '@angular/core';

interface IUser {
  name?: string,
  age: number
}


@Component({
  selector: 'app-directive-if',
  imports: [],
  templateUrl: './directive-if.html',
  styleUrl: './directive-if.css'
})
export class DirectiveIf {

  displayText = true


  user: IUser = {
    age: 30
  }
}
