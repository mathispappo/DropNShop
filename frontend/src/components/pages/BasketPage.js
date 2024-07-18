import React, { useEffect, useState }  from 'react';
import '../../css/BasketPage.css';
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
  const [discount] = useState(0);
  const [delivery] = useState(29.99);
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
    if (quantity < 1) return;
  
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('JWT not found');
      }
  
      const payload = { itemId: Number(itemId), quantity: Number(quantity) };
      console.log('Updating cart item with payload:', payload); // Debugging line
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cart-items`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }
  
      const updatedItem = await response.json();
      setCartItems(cartItems.map(item => (item.id === itemId ? updatedItem : item)));
    } catch (error) {
      console.error('Error updating cart item:', error);
      setError(`Error updating cart item: ${error.message}`);
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
      {!cartItems.length ? (
        <div className="empty-basket">
          <h2>Your basket is empty</h2>
          <p>Go back to the <a href="/shop">shop</a> to add items</p>
        </div>
      ) : (
        <div className="basket-container">
          <div className="product-list">
            <h2>Shopping Cart</h2>
            {message && <p className="success-message">{message}</p>}
            <div className="product-header">
              <span className='header-product'>Product</span>
              <span className='header-quantity'>Quantity</span>
              <span className='header-price'>Price</span>
            </div>
            {cartItems.map(item => (
            <div key={item.id} className="product-item">
              <img src={item.itemId.imageUrl} alt={item.itemId.title} />
              <div className="product-details">
              <h3>{item.itemId.title}</h3>
              </div>
              <div className="quantity">
                <button className="quantity-button" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button
                  className="quantity-button"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >+</button>
              </div>
              <div className="price">${Math.floor(item.itemId.price)}</div>
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
            <input type="text" className={couponError ? 'error-input' : ''} placeholder="Enter your coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)}/>
            <button className="apply-coupon-button" onClick={handleApplyCoupon}>Apply Your Coupon</button>
            {couponError && <p className="error-message">{couponError}</p>}
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
      )}
    </div>
  );
}

export default BasketPage;
