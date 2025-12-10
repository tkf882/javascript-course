import {getProduct, loadProductsFetch} from '../data/products.js';
import {orders, getOrder} from '../data/orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {cart} from '../data/cart-class.js';

async function loadPage() {
  try {
    await Promise.all([
      loadProductsFetch()
    ])

    renderTracking()

  } catch(error) {
    console.log(`Unexpected error: ${error}`);
  }

}

function formatProgress(orderTime, deliveryTime) {
  // using dayjs objects
  const currentTime = dayjs();
  return ((currentTime - orderTime)/(deliveryTime - orderTime)) * 100;
}

function renderOrderHeader() {
  document.querySelector('.js-cart-quantity').innerHTML = cart.calculateCartQuantity();
}

function renderTracking() {
  console.log(orders);

  const url = new URL(window.location.href);
  // console.log(url.searchParams.get('orderId')); // 123
  // console.log(url.searchParams.get('productId')); // 456

  const orderIdURL = url.searchParams.get('orderId');
  const productIdURL = url.searchParams.get('productId');

  const matchingOrder = getOrder(orderIdURL);
  const matchingProduct = getProduct(productIdURL); // all other product info

  let matchingProductOrder; // productId, quantity, estimatedDeliveryTime
  matchingOrder.products.forEach((p) => {
    if (p.productId === productIdURL) {
      matchingProductOrder = p;
    }
  });

  const orderTime = dayjs(matchingOrder.orderTime);
  const deliveryTime = dayjs(matchingProductOrder.estimatedDeliveryTime);
  const deliveryDate = deliveryTime.format('dddd, MMMM D');

  const progress = formatProgress(orderTime, deliveryTime);
  console.log(progress);

  let html = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${deliveryDate}
    </div>

    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${matchingProductOrder.quantity}
    </div>

    <img class="product-image" src="${matchingProduct.image}">

    <div class="progress-labels-container">
      <div class="progress-label ${progress < 50 ? 'current-status' : ''}">
      Preparing
      </div>
      <div class="progress-label ${progress >= 50 && progress < 100 ? 'current-status' : ''}">
      Shipped
      </div>
      <div class="progress-label ${progress >= 100 ? 'current-status' : ''}">
      Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${progress}%"></div>
    </div>
  `;

  document.querySelector('.js-order-tracking').innerHTML = html;
  renderOrderHeader();

}



loadPage();


