// import {addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {cart} from '../../data/cart-class.js';

describe('test suite: addToCart', () => {

  beforeEach(() => {
    spyOn(Storage.prototype, 'setItem');
  });

  it('adds an existing product to the cart', () => {

    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([{
    //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //     quantity: 1,
    //     deliveryOptionId: '1'
    //   }]);
    // });
    // loadFromStorage();

    cart.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }];

    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems.length).toEqual(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }]));
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(2);

  });

  it('adds a new product to the cart', () => {

    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([]);
    // });
    // loadFromStorage();

    cart.cartItems = [];

    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems.length).toEqual(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
  });

});


describe('test suite: removeFromCart', () => {

  beforeEach(() => {
    spyOn(Storage.prototype, 'setItem');
  });

  it('remove a product from the cart', () => {

    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([{
    //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //     quantity: 1,
    //     deliveryOptionId: '1'
    //   }]);
    // });
    // loadFromStorage();

    cart.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }];

    cart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.cartItems.length).toEqual(0);
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([]));
  });

  it('does nothing if productId not in cart', () => {

    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([{
    //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //     quantity: 1,
    //     deliveryOptionId: '1'
    //   }]);
    // });
    // loadFromStorage();

    cart.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }];

    cart.removeFromCart('a');

    expect(cart.cartItems.length).toEqual(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
  });
  
});


describe('test suite: updateDeliveryOption()', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(() => {
    spyOn(Storage.prototype, 'setItem');
  });

  it('updates the delivery option of product in cart', () => {
    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([{
    //     productId: productId1,
    //     quantity: 1,
    //     deliveryOptionId: '1'
    //   }]);
    // });

    // loadFromStorage();

    cart.cartItems = [{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '1'
    }];

    cart.updateDeliveryOption(productId1, '3');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId1);
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '3'
    }]));
  });

  it('edge case: product not in cart', () => {
    // spyOn(Storage.prototype, 'getItem').and.callFake(() => {
    //   return JSON.stringify([{
    //     productId: productId1,
    //     quantity: 1,
    //     deliveryOptionId: '1'
    //   }]);
    // });

    // loadFromStorage();

    cart.cartItems = [{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '1'
    }];

    cart.updateDeliveryOption('bird', '3');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId1);
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(0);

    
  });


});