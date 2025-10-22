export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  age: number,
  bankAccount: "COURANT" | "EPARGNE" | "NC",
}
