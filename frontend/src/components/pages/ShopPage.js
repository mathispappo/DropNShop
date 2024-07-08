import React from 'react';
import '../../css/ShopPage.css';
import bags from '../../assets/category/bags.png';
import shoes from '../../assets/category/shoes.png';
import cosmetics from '../../assets/category/cosmetics.png';
import electronics from '../../assets/category/electronics.png';
import product1 from '../../assets/product/product1.png';
import product2 from '../../assets/product/product2.png';
import product3 from '../../assets/product/product3.png';
import product4 from '../../assets/product/product4.png';
import { Link } from 'react-router-dom';

function ShopPage() {
  return (
    <div className="shop-page">
      <section className="categories-section">
        <h2>Shop By Category</h2>
        <p>You can shop your product by category</p>
        <div className="categories">
          <div className="category">
            <img src={bags} alt="Bags" />
            <h3>BAGS</h3>
            <p>2500 Items</p>
          </div>
          <div className="category">
            <img src={shoes} alt="Shoes" />
            <h3>SHOES</h3>
            <p>800 Items</p>
          </div>
          <div className="category">
            <img src={cosmetics} alt="Cosmetics" />
            <h3>COSMETICS</h3>
            <p>75 Items</p>
          </div>
          <div className="category">
            <img src={electronics} alt="Electronics Accessories" />
            <h3>ELECTRONICS ACCESSORIES</h3>
            <p>175 Items</p>
          </div>
        </div>
      </section>

      <section className="exclusive-products-section">
        <h2>New Exclusive Products</h2>
        <p>Our Modern and Exclusive Branded Product</p>
        <div className="products">
          <Link to="/product1">
            <div className="product">
              <img src={product1} alt="Product 1" />
              <p>-10%</p>
            </div>
          </Link>
          <Link to="/product1">
            <div className="product">
              <img src={product2} alt="Product 2" />
              <p>-05%</p>
            </div>
          </Link>
          <Link to="/product1">
            <div className="product">
              <img src={product3} alt="Product 3" />
              <p>-15%</p>
            </div>
          </Link>
          <Link to="/product1">
            <div className="product">
              <img src={product4} alt="Product 4" />
              <p>-31%</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;