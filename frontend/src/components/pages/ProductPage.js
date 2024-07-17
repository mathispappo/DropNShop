import React, { useEffect, useState } from 'react';
import '../../css/ProductPage.css';
import productImage from '../../assets/product/product1.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/items/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProduct(data))
      .catch(error => {
        console.error('Error fetching product:', error);
        setError(error.message);
      });
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuyNow = (evt) => {
    const jwt = localStorage.getItem('jwt');
    evt.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/cart-items`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({ itemId: Number(id), quantity: Number(quantity) }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMessage('Item added to the basket successfully!');
      })
      .catch(error => {
        console.error('Error adding item to basket:', error);
        setMessage('Error adding item to basket.');
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const subtotal = product.price * quantity;

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.imageUrl} alt="Pointy Toe Mule with Mini Heel" />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p className="stock-status">In stock</p>
          <p className="sku">{product.shortDescription}</p>
          <p className="description">{product.longDescription}</p>
          <div className="quantity-selector">
        <label htmlFor="quantity">QUANTITY</label>
        <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={handleQuantityChange}/> </div>
          <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
          <Link to="/basket">
            <button className="buy-now-button" onClick={handleBuyNow} >BUY NOW</button>
          </Link>
          <div className="terms">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">I agree with <a href="/terms">Terms & Conditions</a></label>
          </div>
          <div className="additional-info">
            <p>Free Shipping on orders over $99. Estimated to be delivered on 12/01/2022 - 15/10/2022.</p>
            <p>Free Returns. Learn More.</p>
            <p>Covid-19 Shipping Delay Notice.</p>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h2>DESCRIPTION</h2>
        <p>
          Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe. Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drosique des commodo pharetras loremos. Donec pretium egestas sapien et mollis.
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
