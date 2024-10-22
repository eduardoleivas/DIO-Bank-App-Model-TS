import { DioAccount } from "./DioAccount"

export class TestAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public deposit(value: number) {
        if(this.validateStatus()) {
            this.balance += (value + 10);
            console.log(value + " reais adicionados a sua conta");
            console.log("Seu novo saldo é: " + this.balance + " reais");
        }
    }
}