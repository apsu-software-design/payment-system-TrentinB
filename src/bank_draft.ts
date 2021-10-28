import readlineSync = require('readline-sync');
import { PSInterface } from './PSInterface';

export class BankDraft implements PSInterface{
    private name: string;
    private routingNum: string;
    private accountNum: string;

    constructor(){
        this.name = "";
        this.routingNum = "";
        this.accountNum = "";
    }
    public getName(){ return this.name}
    public setName(name: string){ this.name = name}
    public getRoutingNum(){ return this.routingNum}
    public setRoutingNum(routingNum: string){ this.routingNum =routingNum}
    public getAccountNum(){ return this.accountNum}
    public setAccountNum(accountNum: string){ this.accountNum = accountNum}

    //take and validate input
    //much of these are copied from ui and only barely edited
    public getInput(){
        console.log('Enter Bank Account Details.');
        this.setName( readlineSync.question('  Name: '));
        this.setRoutingNum( readlineSync.question('  Bank Routing Number: '));
        this.setAccountNum( readlineSync.question('  Bank Account Number: '));
    }

    public validate(){
        let valid = /^[\w.' ]+$/.test(this.getName()) && /\d{9}/.test(this.getRoutingNum()) && /\d{6,12}/.test(this.getAccountNum());
        return valid;
    }
}