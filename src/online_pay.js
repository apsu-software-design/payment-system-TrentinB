"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePay = void 0;
var readlineSync = require("readline-sync");
var OnlinePay = /** @class */ (function () {
    function OnlinePay() {
        this.email = "";
        this.password = "";
    }
    OnlinePay.prototype.getEmail = function () { return this.email; };
    OnlinePay.prototype.setEmail = function (email) { this.email = email; };
    OnlinePay.prototype.getPassword = function () { return this.password; };
    OnlinePay.prototype.setPassword = function (password) { return password; };
    //take and validate input
    //much of these are copied from ui and only barely edited
    OnlinePay.prototype.getInput = function () {
        console.log('Enter Online Payment Details.');
        this.setEmail(readlineSync.question('  Enter Your Email Address: '));
        this.setPassword(readlineSync.question('  Enter Your Payment Password: '));
    };
    OnlinePay.prototype.validate = function () {
        var valid = /^[\w@.]+$/.test(this.getEmail()) && /\w+/.test(this.getPassword());
        return valid;
    };
    return OnlinePay;
}());
exports.OnlinePay = OnlinePay;
