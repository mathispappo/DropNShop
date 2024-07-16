import React, { useEffect, useState } from 'react';
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


const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/items`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


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
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product">
                <img src={product.imageUrl} alt="Product 1" />
                <p>-10%</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
