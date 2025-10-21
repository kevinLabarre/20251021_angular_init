import { Component } from '@angular/core';


enum BankAcountEnum {
  COURANT = "TOTO",
  EPARGNE = "EPARGNE",
  NC = "NC"
}

interface IUser {
  firstName: string,
  lastName: string,
  age: number,
  bankAccount: "COURANT" | "EPARGNE" | "NC",
  bankAccountEnum: BankAcountEnum
}

class UserClass {
  firstName: string
  lastName: string;
  age: number;
  city: string;

  constructor(firstName: string, lastName: string, age: number, city: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.city = city
  }
}



@Component({
  selector: 'app-root',
  // template: `<section>
  //             <h1>Bienvenue sur angular ICI:) </h1>
  //           </section>`,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: []
})
export class App {

  title: string = "Bienvenue sur angular"

  firstName: string = "Jonh"
  lastName: string = "Doe"

  numbers: number[] = [1, 2, 3, 4, 5]

  myTable: any[] = [1, 2, 3, 'Riri', 'Fifi', 'Loulou']
  myTable2: (string | number)[] = [1, 2, 3, 'Riri', 'Fifi', 'Loulou']

  user: {} = {
    firstName: "Jonh",
    lastName: "Doe",
    age: 30
  }

  // Typage sans interface
  user2: { firstName: string, lastName: string, age: number } = {
    firstName: "Jonh",
    lastName: "Doe",
    age: 30
  }

  // Typage avec interface
  user3: IUser = {
    firstName: "Jonh",
    lastName: "Doe",
    age: 30,
    bankAccount: "COURANT",
    bankAccountEnum: BankAcountEnum.COURANT
  }

  // Typage avec un modèle (class) en passant par le constructeur
  user4: UserClass = {
    firstName: "Jonh",
    lastName: "Doe",
    age: 30,
    city: 'Paris'
  }

  // Typage avec un modèle (class) en passant par le constructeur
  user5: UserClass = new UserClass('Jonh', 'Doe', 30, 'Paris')

  displayTitle(): string {
    return this.title + " affiché par une fonction"
  }

  get fullName(): string {
    return `Retourné par notre getter : ${this.firstName} ${this.lastName}`
  }

  bankAccount: "COURANT" | "EPARGNE" | "NC" = "EPARGNE"
}
