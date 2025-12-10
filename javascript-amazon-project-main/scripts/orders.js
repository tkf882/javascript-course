import {getProduct, loadProductsFetch} from '../data/products.js';
import {orders} from '../data/orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {formatCurrency} from './utils/money.js'
import {cart} from '../data/cart-class.js'

console.log(orders);

async function loadPage() {
  try {
    await Promise.all([
      loadProductsFetch()
    ])

    renderOrder()

  } catch(error) {
    console.log(`Unexpected error: ${error}`);
  }

}

function renderOrderHeader() {
  console.log(cart.cartItems.length);
  document.querySelector('.js-cart-quantity').innerHTML = cart.calculateCartQuantity();
}

function renderOrder() {
  let html = '';
  orders.forEach((order) => {
    const orderTime = dayjs(order.orderTime).format('MMMM D');
    html += `
    <div class="order-container">
      
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${orderTime}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(order.totalCostCents)}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.id}</div>
        </div>
      </div>
      
      ${renderOrderProducts(order.products, order)}

    </div>
    `;
  });

  document.querySelector('.js-orders-grid').innerHTML = html;

  renderOrderHeader();
  
  document.querySelectorAll('.js-buy-again-button').forEach((button) => {
    button.addEventListener('click', () => {
      const buttonProductId = button.dataset.productId;
      cart.addToCart(buttonProductId);
      renderOrderHeader();

      button.innerHTML = 'Added';
      setTimeout(() => {
        button.innerHTML = `
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        `;
      }, 1000);
    });
  });

}

function renderOrderProducts(products, order) {
  let html = ``;
  products.forEach((product) => {
    const matchingProduct = getProduct(product.productId);
    const productQuantity = product.quantity;
    const deliveryTime = dayjs(product.estimatedDeliveryTime).format('MMMM D');
    html += `
      <div class="order-details-grid">
        <div class="product-image-container">
          <img src="${matchingProduct.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${deliveryTime}
          </div>
          <div class="product-quantity">
            Quantity: ${productQuantity}
          </div>
          <button class="buy-again-button button-primary js-buy-again-button"
            data-product-id="${product.productId}">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <a href="tracking.html?orderId=${order.id}&productId=${product.productId}">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      </div>
    `;
  });
  return html;
}


loadPage();

