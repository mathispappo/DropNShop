import React, { useEffect, useState }  from 'react';
import '../../css/BasketPage.css';
import productImage1 from '../../assets/product/product1.png';
import productImage2 from '../../assets/product/product2.png';
import productImage3 from '../../assets/product/product3.png';
import productImage4 from '../../assets/product/product4.png';
import paypal from '../../assets/payment/paypal.png';
import stripe from '../../assets/payment/stripe.png';
import mastercard from '../../assets/payment/mastercard.png';
import bitcoin from '../../assets/payment/bitcoin.png';

const BasketPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [coupon, setCoupon] = useState('');
  const [couponError, setCouponError] = useState('');
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(29.99);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cart-items`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items.');
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const calculatedTax = subtotal * 0.1; // Assume a 10% tax rate
      const calculatedTotal = subtotal - discount + delivery + calculatedTax;

      setTax(calculatedTax);
      setTotal(calculatedTotal);
    };

    calculateTotals();
  }, [cartItems, discount, delivery]);

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      const jwt = localStorage.getItem('jwt');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cart-items`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ itemId, quantity }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedItem = await response.json();
      setCartItems(cartItems.map(item => (item.id === itemId ? updatedItem : item)));
    } catch (error) {
      console.error('Error updating cart item:', error);
      setError('Error updating cart item.');
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const jwt = localStorage.getItem('jwt');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cart-items/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting cart item:', error);
      setError('Error deleting cart item.');
    }
  };

  const handleCancelOrder = async () => {
    try {
      const jwt = localStorage.getItem('jwt');
      for (const item of cartItems) {
        await fetch(`${process.env.REACT_APP_API_URL}/cart-items/${item.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
      }
      setCartItems([]);
      setMessage('Order canceled successfully.');
    } catch (error) {
      console.error('Error canceling order:', error);
      setError('Error canceling order.');
    }
  };

  const handleApplyCoupon = (evt) => {
    evt.preventDefault();
    console.log('Applying coupon:', coupon); 
    setCouponError('Wrong coupon code, please enter another one.');
  };

  if (error) {
    return <div>{error}</div>;
  }

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
          {cartItems.map(item => (
          <div key={item.id} className="product-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="product-details">
              <h3>{item.title}</h3>
            </div>
            <div className="quantity">
              <button className="quantity-button" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
              <input type="text" value={item.quantity} readOnly />
              <button
                className="quantity-button"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >+</button>
            </div>
            <div className="price">${(item.price || 0).toFixed(2)}</div>
            <button className="remove-button" onClick={() => handleDeleteItem(item.id)}>🗑️</button>
          </div>
          ))}
          <div className="buttons">
          <button className="back-button" onClick={() => window.history.back()}>Back</button>
          <button className="cancel-button" onClick={handleCancelOrder}>Cancel Order</button>
          </div>
        </div>
        <div className="summary-section">
          <div className="coupon-code">
            <h3>Coupon Code</h3>
            <input type="text" placeholder="Enter your coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)}/>
            <button className="apply-coupon-button" onClick={handleApplyCoupon}>Apply Your Coupon</button>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Discount: <span>${discount.toFixed(2)}</span></p>
        <p>Delivery: <span>${delivery.toFixed(2)}</span></p>
        <p>Tax: <span>${tax.toFixed(2)}</span></p>
        <h2>Total: <span>${total.toFixed(2)}</span></h2>
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
