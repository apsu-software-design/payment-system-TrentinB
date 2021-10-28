import readlineSync = require('readline-sync');
import { PSInterface } from './PSInterface';

export class OnlinePay implements PSInterface{
    private email: string;
    private password: string;

    constructor(){
        this.email = "";
        this.password = "";
    }
    public getEmail(){ return this.email}
    public setEmail(email: string){ this.email = email}
    public getPassword(){ return this.password}
    public setPassword(password: string){ return password}

    //take and validate input
    //much of these are copied from ui and only barely edited
    public getInput(){
        console.log('Enter Online Payment Details.');
        this.setEmail(readlineSync.question('  Enter Your Email Address: '));
        this.setPassword(readlineSync.question('  Enter Your Payment Password: '));
    }

    public validate(){
        let valid = /^[\w@.]+$/.test(this.getEmail()) && /\w+/.test(this.getPassword());
        return valid;
    }

}