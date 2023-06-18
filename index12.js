// 1. Create order
// 2. Proceed to payment
// 3. Update wallet


// function CreateOrder(cb1) { 
//     console.log("Order Created");
//     cb1();
// }



// function ProceedToPayment(cb1) { 
//     console.log("Payment Proceeded");
//     cb1();
// }


// function UpdateWallet() { 
//     console.log("Wallet Updated");
// }



// this create call back hell & having issue of inversion of controll
// means ProceedToPayment give its control to CreateOrder function...

// // final invoking....
// CreateOrder(function () { 
//     ProceedToPayment(() => { 
//         UpdateWallet();
//     })
// })




// promises in js


function CreateOrder(cart) {

    const pr = new Promise((resolve, reject) => {
        if (cart.length > 0) {
            let orderID = cart.length;
            resolve(orderID);
        } else {
            const err = new Error("Cart is not valid");
            reject(err);
        }
    })
    return pr;
}



function ProceedToPayment(orderID) {
    const pr = new Promise((resolve, reject) => {
        if (orderID >= 2) {
            paymentID = orderID;
            resolve(paymentID);
        } else {
            const err = new Error("Payment Failed !!!!");
            reject(err);
        }
    })
    return pr;
}




function UpdateWallet(PaymentId) {

    if (PaymentId >= 1) {
        return PaymentId;
    } else {
        return 0;
    }
}







const cart = ["Bracelet", "Kurta", "Shirt"];

CreateOrder(cart)
    .then((orderID) => ProceedToPayment(orderID))
    .then((paymentID) => {
        const walletAmount = UpdateWallet(paymentID);
        console.log(walletAmount);
    })
    .catch((err) => { 
        console.log(err.message);
    })


// very important...
// suppose
// function a ==> create order
// function b ==> proceedToPayment
// if we have to excecute func b after a , so fun a will definetely return a promise..
// if we dont have any func to run after a  so we just return the value from there...








    






