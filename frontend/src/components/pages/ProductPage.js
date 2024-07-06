import React from 'react';
import '../../css/ProductPage.css';
import productImage from '../../assets/product1.png';

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={productImage} alt="Pointy Toe Mule with Mini Heel" />
        </div>
        <div className="product-details">
          <h1>Pointy Toe Mule with Mini Heel</h1>
          <p className="price">$286.00</p>
          <p className="stock-status">In stock</p>
          <p className="sku">SKU MK-F-008</p>
          <p className="description">
            Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.
          </p>
          <div className="quantity-selector">
            <label htmlFor="quantity">QUANTITY</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
          <p className="subtotal">Subtotal: $286.00</p>
          <button className="buy-now-button">BUY NOW</button>
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
