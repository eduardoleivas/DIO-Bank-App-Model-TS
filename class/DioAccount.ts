export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number;
  protected status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.status;
  }

  public getName(): string {
    return this.name;
  }

  public deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value;
      console.log(value + " reais adicionados a sua conta");
      console.log("Seu novo saldo é: " + this.balance + " reais");
    }
  }

  public withdraw(value: number): void {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value;
      console.log("Você sacou " + this.balance + " reais");
      console.log("Seu novo saldo é: " + this.balance + " reais");
    } else {
      console.log("Você não tem saldo suficiente para sacar!");
    }
  }

  public getBalance(): void {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
