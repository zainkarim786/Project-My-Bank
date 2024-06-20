var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var readline = require('readline');
var Bank = /** @class */ (function () {
    function Bank() {
        this.accounts = [];
        this.nextId = 1;
    }
    Bank.prototype.createAccount = function (name, initialBalance) {
        var account = {
            id: this.nextId++,
            name: name,
            balance: initialBalance
        };
        this.accounts.push(account);
        console.log("Account created for ".concat(name, " with initial balance ").concat(initialBalance));
    };
    Bank.prototype.deposit = function (id, amount) {
        var account = this.accounts.find(function (acc) { return acc.id === id; });
        if (account) {
            account.balance += amount;
            console.log("Deposited ".concat(amount, " into ").concat(account.name, "'s account. New balance: ").concat(account.balance));
        }
        else {
            console.log("Account with id ".concat(id, " not found."));
        }
    };
    Bank.prototype.withdraw = function (id, amount) {
        var account = this.accounts.find(function (acc) { return acc.id === id; });
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                console.log("Withdrawn ".concat(amount, " from ").concat(account.name, "'s account. New balance: ").concat(account.balance));
            }
            else {
                console.log("Insufficient balance for ".concat(account.name, "'s account."));
            }
        }
        else {
            console.log("Account with id ".concat(id, " not found."));
        }
    };
    Bank.prototype.displayAccount = function (id) {
        var account = this.accounts.find(function (acc) { return acc.id === id; });
        if (account) {
            console.log("Account details for ".concat(account.name, ":"));
            console.log("ID: ".concat(account.id));
            console.log("Balance: ".concat(account.balance));
        }
        else {
            console.log("Account with id ".concat(id, " not found."));
        }
    };
    return Bank;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var bank = new Bank();
var askQuestion = function (question) {
    return new Promise(function (resolve) { return rl.question(question, resolve); });
};
var showMenu = function () {
    console.log("\nMenu:");
    console.log("1. Create Account");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Display Account Details");
    console.log("5. Exit");
    rl.question('Choose an option: ', function (option) {
        handleOption(option);
    });
};
var handleOption = function (option) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name_1, initialBalanceStr, initialBalance, depositIdStr, depositId, depositAmountStr, depositAmount, withdrawIdStr, withdrawId, withdrawAmountStr, withdrawAmount, displayIdStr, displayId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = option;
                switch (_a) {
                    case '1': return [3 /*break*/, 1];
                    case '2': return [3 /*break*/, 4];
                    case '3': return [3 /*break*/, 7];
                    case '4': return [3 /*break*/, 10];
                    case '5': return [3 /*break*/, 12];
                }
                return [3 /*break*/, 13];
            case 1: return [4 /*yield*/, askQuestion('Enter account holder name: ')];
            case 2:
                name_1 = _b.sent();
                return [4 /*yield*/, askQuestion('Enter initial balance: ')];
            case 3:
                initialBalanceStr = _b.sent();
                initialBalance = parseFloat(initialBalanceStr);
                if (isNaN(initialBalance)) {
                    console.log('Please enter a valid initial balance.');
                }
                else {
                    bank.createAccount(name_1, initialBalance);
                }
                showMenu();
                return [3 /*break*/, 14];
            case 4: return [4 /*yield*/, askQuestion('Enter account id to deposit: ')];
            case 5:
                depositIdStr = _b.sent();
                depositId = parseInt(depositIdStr, 10);
                return [4 /*yield*/, askQuestion('Enter amount to deposit: ')];
            case 6:
                depositAmountStr = _b.sent();
                depositAmount = parseFloat(depositAmountStr);
                if (isNaN(depositAmount)) {
                    console.log('Please enter a valid amount.');
                }
                else {
                    bank.deposit(depositId, depositAmount);
                }
                showMenu();
                return [3 /*break*/, 14];
            case 7: return [4 /*yield*/, askQuestion('Enter account id to withdraw: ')];
            case 8:
                withdrawIdStr = _b.sent();
                withdrawId = parseInt(withdrawIdStr, 10);
                return [4 /*yield*/, askQuestion('Enter amount to withdraw: ')];
            case 9:
                withdrawAmountStr = _b.sent();
                withdrawAmount = parseFloat(withdrawAmountStr);
                if (isNaN(withdrawAmount)) {
                    console.log('Please enter a valid amount.');
                }
                else {
                    bank.withdraw(withdrawId, withdrawAmount);
                }
                showMenu();
                return [3 /*break*/, 14];
            case 10: return [4 /*yield*/, askQuestion('Enter account id to display details: ')];
            case 11:
                displayIdStr = _b.sent();
                displayId = parseInt(displayIdStr, 10);
                bank.displayAccount(displayId);
                showMenu();
                return [3 /*break*/, 14];
            case 12:
                rl.close();
                return [3 /*break*/, 14];
            case 13:
                console.log('Invalid option, please try again.');
                showMenu();
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
showMenu();
