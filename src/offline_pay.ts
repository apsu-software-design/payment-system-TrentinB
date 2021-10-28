import readlineSync = require('readline-sync');
import { PSInterface } from './PSInterface';

export class OfflinePay implements PSInterface{
    public name: string;
    public address: string;

    constructor(){
        this.name = "";
        this.address = "";
    }
    public getName(){ return this.name}
    public setName(name: string){ this.name = name}
    public getAddress(){ return this.address}
    public setAddress(address: string){ this.address = address}

    //take and validate input
    //much of these are copied from ui and only barely edited
    public getInput(){
        console.log('Enter Offline Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setAddress(readlineSync.question('  Enter Your Billing Address: '));
    }
    public validate(){
        let valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getAddress());
        return valid;
    }
}