"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSystemContext = exports.PaymentSystemExecutor = void 0;
var credit_card_1 = require("./credit_card");
var bank_draft_1 = require("./bank_draft");
var online_pay_1 = require("./online_pay");
var offline_pay_1 = require("./offline_pay");
var PaymentSystemExecutor = /** @class */ (function () {
    function PaymentSystemExecutor(newInterface) {
        this.paymentInterface = newInterface;
    }
    //this method is what executes the necessary class
    PaymentSystemExecutor.prototype.execute = function () {
        var inter = this.paymentInterface;
        inter.getInput();
        //uses the interface to set valid
        var valid = inter.validate();
        //copied from original UI
        if (valid) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
//ui wants to pull from this file so i'm making this function in here
// .execute() just kinda works so I didnt make my own execute class
var PaymentSystemContext = /** @class */ (function () {
    function PaymentSystemContext(paymentType) {
        this.paymentType = paymentType;
        if (paymentType = "CreditCard") {
            new PaymentSystemExecutor(new credit_card_1.CreditCard).execute();
        }
        else if (paymentType = "BankDraft") {
            new PaymentSystemExecutor(new bank_draft_1.BankDraft).execute();
        }
        else if (paymentType = "OnlinePay") {
            new PaymentSystemExecutor(new online_pay_1.OnlinePay).execute();
        }
        else if (paymentType = "OfflinePay") {
            new PaymentSystemExecutor(new offline_pay_1.OfflinePay).execute();
        }
    }
    return PaymentSystemContext;
}());
exports.PaymentSystemContext = PaymentSystemContext;
