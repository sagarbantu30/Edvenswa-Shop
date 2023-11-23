// ProductList.js
import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import rt from "../../Assets/products/star-solid.svg";
import { Link } from "react-router-dom";
import "../Products/products.css";
import { Heart, ShoppingCart } from "phosphor-react";
// import ht from '../../Assets/heart-sharp.svg'


const ProductList = () => {
  const { filteredProducts, addToCart, addToFavorites } = useContext(ShopContext);
  // const navigate = useNavigate();

  return (  
    <div className="display">
      {filteredProducts.map((product) => (
        <div className="belly" key={product.id}>
          <div className="pdfg">
          <div className="ct-img">
            <Link to={`/OneProduct/${product.id}`}>
              <img src={product.images[0]} alt="" />
            </Link>
          </div>
          <div className="ct-dis">
            <p>
              <strong>
                {product.title}
              </strong>
            </p>
            <p>
              <img src={rt} alt="" />
              {product.rating}
            </p>
            <p>
              <strong>₹:{product.price}</strong>{" "}
              <button className='sc' onClick={() => addToCart(product)}>
              <ShoppingCart size={13} />
              </button>
            </p>
          </div>
          </div>
          <button className="btnm" onClick={() => addToFavorites(product)}>
            <Heart size={32} />
            </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
