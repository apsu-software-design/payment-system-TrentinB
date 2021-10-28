"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
var readlineSync = require("readline-sync");
var CreditCard = /** @class */ (function () {
    function CreditCard() {
        this.name = "";
        this.number = "";
        this.expiration = "";
    }
    CreditCard.prototype.getName = function () { return this.name; };
    CreditCard.prototype.setName = function (name) { this.name = name; };
    CreditCard.prototype.getNumber = function () { return this.number; };
    CreditCard.prototype.setNumber = function (number) { this.number = number; };
    CreditCard.prototype.getExpiration = function () { return this.expiration; };
    CreditCard.prototype.setExpiration = function (expiration) { this.expiration = expiration; };
    //take and validate input
    //much of these are copied from ui and only barely edited
    CreditCard.prototype.getInput = function () {
        console.log('Enter Credit Card Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setNumber(readlineSync.question('  Credit Card Number: '));
        this.setExpiration(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
    };
    CreditCard.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /\d{15,16}/.test(this.getNumber()) && /\d\d\/\d\d/.test(this.getExpiration());
        return valid;
    };
    return CreditCard;
}());
exports.CreditCard = CreditCard;
