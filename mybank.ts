const readline = require('readline');

interface Account {
    id: number;
    name: string;
    balance: number;
}

class Bank {
    private accounts: Account[] = [];
    private nextId: number = 1;

    createAccount(name: string, initialBalance: number): void {
        const account: Account = {
            id: this.nextId++,
            name,
            balance: initialBalance
        };
        this.accounts.push(account);
        console.log(`Account created for ${name} with initial balance ${initialBalance}`);
    }

    deposit(id: number, amount: number): void {
        const account = this.accounts.find(acc => acc.id === id);
        if (account) {
            account.balance += amount;
            console.log(`Deposited ${amount} into ${account.name}'s account. New balance: ${account.balance}`);
        } else {
            console.log(`Account with id ${id} not found.`);
        }
    }

    withdraw(id: number, amount: number): void {
        const account = this.accounts.find(acc => acc.id === id);
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                console.log(`Withdrawn ${amount} from ${account.name}'s account. New balance: ${account.balance}`);
            } else {
                console.log(`Insufficient balance for ${account.name}'s account.`);
            }
        } else {
            console.log(`Account with id ${id} not found.`);
        }
    }

    displayAccount(id: number): void {
        const account = this.accounts.find(acc => acc.id === id);
        if (account) {
            console.log(`Account details for ${account.name}:`);
            console.log(`ID: ${account.id}`);
            console.log(`Balance: ${account.balance}`);
        } else {
            console.log(`Account with id ${id} not found.`);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bank = new Bank();

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const showMenu = () => {
    console.log("\nMenu:");
    console.log("1. Create Account");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Display Account Details");
    console.log("5. Exit");
    rl.question('Choose an option: ', (option: string) => {
        handleOption(option);
    });
};

const handleOption = async (option: string) => {
    switch (option) {
        case '1':
            const name = await askQuestion('Enter account holder name: ');
            const initialBalanceStr = await askQuestion('Enter initial balance: ');
            const initialBalance = parseFloat(initialBalanceStr);
            if (isNaN(initialBalance)) {
                console.log('Please enter a valid initial balance.');
            } else {
                bank.createAccount(name, initialBalance);
            }
            showMenu();
            break;
        case '2':
            const depositIdStr = await askQuestion('Enter account id to deposit: ');
            const depositId = parseInt(depositIdStr, 10);
            const depositAmountStr = await askQuestion('Enter amount to deposit: ');
            const depositAmount = parseFloat(depositAmountStr);
            if (isNaN(depositAmount)) {
                console.log('Please enter a valid amount.');
            } else {
                bank.deposit(depositId, depositAmount);
            }
            showMenu();
            break;
        case '3':
            const withdrawIdStr = await askQuestion('Enter account id to withdraw: ');
            const withdrawId = parseInt(withdrawIdStr, 10);
            const withdrawAmountStr = await askQuestion('Enter amount to withdraw: ');
            const withdrawAmount = parseFloat(withdrawAmountStr);
            if (isNaN(withdrawAmount)) {
                console.log('Please enter a valid amount.');
            } else {
                bank.withdraw(withdrawId, withdrawAmount);
            }
            showMenu();
            break;
        case '4':
            const displayIdStr = await askQuestion('Enter account id to display details: ');
            const displayId = parseInt(displayIdStr, 10);
            bank.displayAccount(displayId);
            showMenu();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Invalid option, please try again.');
            showMenu();
            break;
    }
};

showMenu();
