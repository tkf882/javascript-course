const addFun = function add() {
    console.log(2+3);
}

function runTwice(fun) {
    fun();
    fun();
}
runTwice(addFun);

const finButtonElement = document.querySelector('.js-fin-button');
finButtonElement.addEventListener('click', () => {
    finButtonElement.innerHTML = 'Loading...';
    setTimeout(() => finButtonElement.innerHTML = 'Finished!', 1000);
});

let cartTimeoutID;
const cartButtonElement = document.querySelector('.js-cart');
cartButtonElement.addEventListener('click', () => {
    clearInterval(cartTimeoutID);
    cartButtonElement.innerHTML = 'Added';
    cartTimeoutID = setTimeout(() => cartButtonElement.innerHTML = 'Add to cart', 2000);
});

let messages = 0;
let titleChangerID = setInterval(() => {
    const titleElement = document.querySelector('.js-title');
    titleElement.innerHTML = `(${messages}) New messages`;
    messages++;
}, 1000);

clearInterval(titleChangerID);

messages = 0;

const notifAddElement = document.querySelector('.js-notif-add');
const notifRemoveElement = document.querySelector('.js-notif-remove');

notifAddElement.addEventListener('click', () => {
    const titleElement = document.querySelector('.js-title');
    messages++;
    titleElement.innerHTML = `(${messages}) New messages`;
});

notifRemoveElement.addEventListener('click', () => {
    const titleElement = document.querySelector('.js-title');
    messages--;
    if (messages > 0) {
        titleElement.innerHTML = `(${messages}) New messages`;
    } else {
        titleElement.innerHTML = 'App';
        messages = 0; // can't go below 0
    }
});

