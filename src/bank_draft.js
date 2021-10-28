"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDraft = void 0;
var readlineSync = require("readline-sync");
var BankDraft = /** @class */ (function () {
    function BankDraft() {
        this.name = "";
        this.routingNum = "";
        this.accountNum = "";
    }
    BankDraft.prototype.getName = function () { return this.name; };
    BankDraft.prototype.setName = function (name) { this.name = name; };
    BankDraft.prototype.getRoutingNum = function () { return this.routingNum; };
    BankDraft.prototype.setRoutingNum = function (routingNum) { this.routingNum = routingNum; };
    BankDraft.prototype.getAccountNum = function () { return this.accountNum; };
    BankDraft.prototype.setAccountNum = function (accountNum) { this.accountNum = accountNum; };
    //take and validate input
    //much of these are copied from ui and only barely edited
    BankDraft.prototype.getInput = function () {
        console.log('Enter Bank Account Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setRoutingNum(readlineSync.question('  Bank Routing Number: '));
        this.setAccountNum(readlineSync.question('  Bank Account Number: '));
    };
    BankDraft.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /\d{9}/.test(this.getRoutingNum()) && /\d{6,12}/.test(this.getAccountNum());
        return valid;
    };
    return BankDraft;
}());
exports.BankDraft = BankDraft;
