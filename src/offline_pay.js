"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePay = void 0;
var readlineSync = require("readline-sync");
var OfflinePay = /** @class */ (function () {
    function OfflinePay() {
        this.name = "";
        this.address = "";
    }
    OfflinePay.prototype.getName = function () { return this.name; };
    OfflinePay.prototype.setName = function (name) { this.name = name; };
    OfflinePay.prototype.getAddress = function () { return this.address; };
    OfflinePay.prototype.setAddress = function (address) { this.address = address; };
    //take and validate input
    //much of these are copied from ui and only barely edited
    OfflinePay.prototype.getInput = function () {
        console.log('Enter Offline Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setAddress(readlineSync.question('  Enter Your Billing Address: '));
    };
    OfflinePay.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getAddress());
        return valid;
    };
    return OfflinePay;
}());
exports.OfflinePay = OfflinePay;
