import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {cart} from '../data/cart-class.js';
// import '../data/car.js';
// import '../data/cart-class.js'; // runs all code without importing anything
// import '../data/backend-practice.js';

async function loadPage() {
    try {
        // await loadProductsFetch();

        // const value = await new Promise((resolve, reject) => {
        //     loadCart(() => {
        //         // reject('error3')
        //         resolve('value3');
        //     });
        // });

        // await cart.loadCartFetch();


        await Promise.all([
            loadProductsFetch(),
            cart.loadCartFetch()
        ])

        // console.log(value); // value3

        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    } catch(error) {
        console.log(`Unexpected error (asyncawait): try again later ${error}`);
    }

}
loadPage();


/* 
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })
]).then((values) => {
    // console.log(values); // ['value1', 'value2']
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
 */

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
*/

// loadProducts(() => {
//     loadCart(() => {
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });

