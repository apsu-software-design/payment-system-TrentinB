import { PSInterface } from "./PSInterface";
import { CreditCard } from "./credit_card";
import { BankDraft } from "./bank_draft";
import { OnlinePay } from "./online_pay";
import { OfflinePay } from "./offline_pay";


export class PaymentSystemExecutor {
    //This class will handle validation, encryption, and reporting if validation fails

    private paymentInterface: PSInterface;
    constructor(newInterface: PSInterface){
        this.paymentInterface = newInterface;
    }

    //this method is what executes the necessary class
    public execute(): void{
        let inter = this.paymentInterface;
        inter.getInput();

        //uses the interface to set valid
        let valid = inter.validate();

        //copied from original UI
        if (valid) {
            console.log("Your payment information is being encrypted.");
      
            console.log("The payment is being processed.")
        }
        else {
            console.log('The payment is invalid.');
        }
    }

}

//ui wants to pull from this file so i'm making this function in here
// .execute() just kinda works so I didnt make my own execute class
export class PaymentSystemContext {
    private paymentType: string;    

    constructor(paymentType: string){
        this.paymentType = paymentType;

        if (paymentType = "CreditCard"){
            new PaymentSystemExecutor(new CreditCard).execute();
        } else if (paymentType = "BankDraft"){
            new PaymentSystemExecutor(new BankDraft).execute();
        } else if (paymentType = "OnlinePay"){
            new PaymentSystemExecutor(new OnlinePay).execute();
        } else if (paymentType = "OfflinePay"){
            new PaymentSystemExecutor(new OfflinePay).execute();
        }
    }
}