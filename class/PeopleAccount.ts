import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  public getDoc(): number {
    let doc: number = this.doc_id;
    console.log("O documento do usuário é: " + doc);
    return doc;
  }
}