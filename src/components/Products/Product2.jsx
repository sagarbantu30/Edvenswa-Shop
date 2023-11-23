// ProductList.js
import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import rt from "../../Assets/products/star-solid.svg";
import { Link } from "react-router-dom";
import "./Product2.css";
import { Heart, ShoppingCart } from "phosphor-react";

const ProductList2 = () => {
  const { filteredProducts, addToCart, addToFavorites } =
    useContext(ShopContext);
  // const navigate = useNavigate();

  return (
    <div className="display2">
      {filteredProducts.map((product) => (
        <div className="belly2" key={product.id}>
          <div className="pdfg2">
            <div className="ct-img2">
              <Link to={`/OneProduct/${product.id}`}>
                <img src={product.images[0]} alt="" />
              </Link>
            </div>
            <div className="ct-dis2">
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>
                <img src={rt} alt="" />
                {product.rating}
              </p>
              <p>
                <strong>₹:{product.price}</strong>{" "}
                <button className="bms" onClick={() => addToCart(product)}>
                  <ShoppingCart size={13} />
                </button>
              </p>
            </div>
          </div>
          <button className="btnm2" onClick={() => addToFavorites(product)}>
            <Heart size={32} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList2;
