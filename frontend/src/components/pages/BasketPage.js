import React from 'react';
import '../../css/BasketPage.css';
import productImage1 from '../../assets/product/product1.png';
import productImage2 from '../../assets/product/product2.png';
import productImage3 from '../../assets/product/product3.png';
import productImage4 from '../../assets/product/product4.png';
import paypal from '../../assets/payment/paypal.png';
import stripe from '../../assets/payment/stripe.png';
import mastercard from '../../assets/payment/mastercard.png';
import bitcoin from '../../assets/payment/bitcoin.png';

function BasketPage() {
  return (
    <div className="basket-page">
      <div className="basket-container">
        <div className="product-list">
          <h2>Shopping Cart</h2>
          <div className="product-header">
            <span className='header-product'>Product</span>
            <span className='header-quantity'>Quantity</span>
            <span className='header-price'>Price</span>
          </div>
          <div className="product-item">
            <img src={productImage1} alt="Pointy Toe Mule with Mini Heel" />
            <div className="product-details">
              <h3>Pointy Toe Mule with Mini Heel</h3>
            </div>
            <div className="quantity">
              <button className="quantity-button">-</button>
              <input type="text" value="2" readOnly />
              <button className="quantity-button">+</button>
            </div>
            <div className="price">$572.00</div>
            <button className="remove-button">🗑️</button>
          </div>
          <div className="product-item">
            <img src={productImage2} alt="Louis Vuitton Speedy 30 Monogram Canvas Bag" />
            <div className="product-details">
              <h3>Louis Vuitton Speedy 30 Monogram Canvas Bag</h3>
            </div>
            <div className="quantity">
              <button className="quantity-button">-</button>
              <input type="text" value="1" readOnly />
              <button className="quantity-button">+</button>
            </div>
            <div className="price">$109.99</div>
            <button className="remove-button">🗑️</button>
          </div>
          <div className="product-item">
            <img src={productImage3} alt="Rolex Submariner Date 18k Yellow Gold Blue Dial" />
            <div className="product-details">
              <h3>Rolex Submariner Date 18k Yellow Gold Blue Dial</h3>
            </div>
            <div className="quantity">
              <button className="quantity-button">-</button>
              <input type="text" value="1" readOnly />
              <button className="quantity-button">+</button>
            </div>
            <div className="price">$349.99</div>
            <button className="remove-button">🗑️</button>
          </div>
          <div className="product-item">
            <img src={productImage4} alt="Red Patent Leather Handbag with Gold Handle" />
            <div className="product-details">
              <h3>Red Patent Leather Handbag with Gold Handle</h3>
            </div>
            <div className="quantity">
              <button className="quantity-button">-</button>
              <input type="text" value="1" readOnly />
              <button className="quantity-button">+</button>
            </div>
            <div className="price">$199.99</div>
            <button className="remove-button">🗑️</button>
          </div>
          <div className="buttons">
            <button className="back-button">Back</button>
            <button className="cancel-button">Cancel Order</button>
          </div>
        </div>
        <div className="summary-section">
          <div className="coupon-code">
            <h3>Coupon Code</h3>
            <input type="text" placeholder="Enter Your Coupon Code" />
            <button>Apply Your Coupon</button>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Discount: <span>$0.00</span></p>
            <p>Delivery: <span>$29.99</span></p>
            <p>Tax: <span>$39.99</span></p>
            <h2>Total: <span>$1879.93</span></h2>
          </div>
          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="payment-icons">
              <img src={paypal} alt="PayPal" />
              <img src={stripe} alt="Stripe" />
              <img src={mastercard} alt="MasterCard" />
              <img src={bitcoin} alt="Bitcoin" />
            </div>
            <button className="checkout-button">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
