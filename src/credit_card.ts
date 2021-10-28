import readlineSync = require('readline-sync');
import { PSInterface } from './PSInterface';

export class CreditCard implements PSInterface{
    private name: string;
    private number: string;
    private expiration: string;

    constructor(){
        this.name = "";
        this.number = "";
        this.expiration = "";
    }
    public getName(){ return this.name}
    public setName(name: string){ this.name = name}
    public getNumber(){ return this.number}
    public setNumber(number: string){ this.number = number}
    public getExpiration(){ return this.expiration}
    public setExpiration(expiration: string){ this.expiration = expiration}

    //take and validate input
    //much of these are copied from ui and only barely edited
    public getInput(){
        console.log('Enter Credit Card Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setNumber(readlineSync.question('  Credit Card Number: '));
        this.setExpiration(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
    }

    public validate(){
        let valid = /^[\w.' ]+$/.test(this.getName()) && /\d{15,16}/.test(this.getNumber()) && /\d\d\/\d\d/.test(this.getExpiration());
        return valid;
    }
}