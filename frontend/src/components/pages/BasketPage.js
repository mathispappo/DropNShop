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
  const [lastOrder, setLastOrder] = useState(null);

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
      console.log('Fetched cart items:', data); // Logging fetched data
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('Error fetching cart items.');
    }
  };

  useEffect(() => {
    fetchCartItems();
    fetchLastOrder();
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cartItems.reduce((acc, item) => acc + Math.floor(item.item.price) * item.quantity, 0);
      const calculatedTax = subtotal * 0.1; // Assume a 10% tax rate
      const calculatedTotal = subtotal - discount + delivery + calculatedTax;

      setTax(calculatedTax);
      setTotal(calculatedTotal);
    };

    calculateTotals();
  }, [cartItems, discount, delivery]);


  // Use the new fetchCartItems function to refresh the state after updating quantity
const handleUpdateQuantity = async (itemId, quantity) => {
  if (quantity < 1) return;

  try {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      throw new Error('JWT not found');
    }

    const payload = { itemId: Number(itemId), quantity: Number(quantity) };
    console.log('Updating cart item with payload:', payload); // Logging payload

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

    await fetchCartItems(); // Re-fetch the cart items to update the state
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
    await fetchCartItems(); // Re-fetch the cart items to update the state
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

  const handleCheckout = async () => {
    try {
      setMessage('Processing payment...');
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate 3 seconds delay

      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('JWT not found');
      }

      const orderLines = cartItems.map(item => ({
        itemId: item.item.id,
        quantity: item.quantity,
      }));

      const payload = {
        orderLines,
        shippingAddress: ""
      };

      // Add all cart items to orderline
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: 'POST',
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

      // Clear the basket
      for (const item of cartItems) {
        await fetch(`${process.env.REACT_APP_API_URL}/cart-items/${item.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
      }

      setCartItems([]);
      setMessage('Payment successful and order placed!');
    } catch (error) {
      console.error('Error during checkout:', error);
      setError('Error during checkout.');
      setMessage('');
    }
    
    window.location.reload();
  };

  const fetchLastOrder = async () => {
    try {
      const jwt = localStorage.getItem('jwt');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLastOrder(data[data.length - 1]);
    } catch (error) {
      console.error('Error fetching last order:', error);
      setError('Error fetching last order.');
    }
  };
  

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="basket-page">
        <div className="basket-container">
          <div className="product-list">
            <h2>Shopping Cart</h2>
            {message && <p className="success-message">{message}</p>}
            {!cartItems.length ? (
            <div className="empty-basket">
              <h2>Your basket is empty</h2>
              <p>Go back to the <a href="/shop">shop</a> to add items</p>
            </div>
            ) : (
              <>
                <div className="product-header">
                  <span className='header-product'>Product</span>
                  <span className='header-quantity'>Quantity</span>
                  <span className='header-price'>Price</span>
                </div>
                {cartItems.map(item => (
                <div key={item.id} className="product-item">
                  <img src={item.item.imageUrl} alt={item.item.title} />
                  <div className="product-details">
                  <h3>{item.item.title}</h3>
                  </div>
                  <div className="quantity">
                    <button className="quantity-button" onClick={() => handleUpdateQuantity(item.item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button
                      className="quantity-button"
                      onClick={() => handleUpdateQuantity(item.item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <div className="price">${Math.floor(item.item.price)}</div>
                  <button className="remove-button" onClick={() => handleDeleteItem(item.id)}>🗑️</button>
                </div>
            ))}
            <div className="buttons">
            <button className="back-button" onClick={() => window.history.back()}>Back</button>
            <button className="cancel-button" onClick={handleCancelOrder}>Cancel Order</button>
            </div>           
          </>
        )}
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
            <button className="checkout-button" onClick={handleCheckout} >Check Out</button>
          </div>

          {lastOrder && (
      <div className="last-order">
        <h3>Last Order</h3>
        <p>Order Number: <span>{lastOrder.id}</span></p>
        <p>Order Date: <span>{lastOrder.createdAt ? new Date(lastOrder.createdAt).toLocaleDateString() : 'N/A'}</span></p>
      
        <p>Total: <span>${lastOrder.orderLines.reduce((acc, line) => acc + line.price + (line.price*0.1) + 29.99, 0).toFixed(2)}</span></p>

        </div>
        )}
        </div>
      </div>

    </div>
  );
}

export default BasketPage;
