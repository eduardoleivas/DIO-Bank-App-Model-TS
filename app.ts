import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TestAccount } from './class/TestAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const testAccount: TestAccount = new TestAccount('Test', 30);

peopleAccount.deposit(50);
companyAccount.deposit(50);
testAccount.deposit(50);

peopleAccount.withdraw(20);
companyAccount.withdraw(20);
testAccount.withdraw(20);

peopleAccount.getDoc();
companyAccount.getLoan(50);
