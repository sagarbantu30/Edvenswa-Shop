import { useContext, useEffect, useState } from "react";
import {   useParams } from "react-router-dom";
import "./oneproduct.css";
import { ShoppingCart, Sparkle } from "phosphor-react";
import star from "../../Assets/star.svg";
import { ShopContext } from "../../contexts/ShopContext";
import { clientGet } from "../../network/client";
import { PRODUCTS } from "../../network/endpoints";

const OneProduct = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null); // Track hovered image
  const {addToCart} = useContext(ShopContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await clientGet(
          `${PRODUCTS}/${productId}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  useEffect(() => {
    if (product.price && product.discountPercentage) {
      const discountedAmount =
        (product.price * product.discountPercentage) / 100;
      const afterDiscountPrice = product.price - discountedAmount;
      setDiscountedPrice(afterDiscountPrice.toFixed(2));
    }
  }, [product.price, product.discountPercentage]);

  const handleImageHover = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  return (
    <div className="oneprod">
      <div className="one" key={product.id}>
        <div className="oneprod-left">
          <div className="onjc">
            <div className="oneimg">
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    onMouseOver={() => handleImageHover(image)}
                  />
                ))}
            </div>
            <div className="oneimg-main">
              <img
                src={hoveredImage || (product.images && product.images[0])}
                alt=""
              />
            </div>
          </div>
          <div className="botton">
            <button className="addto" onClick={() => addToCart(product)}>
              <ShoppingCart size={16} />
              Add to cart
            </button>
            <button className="buy">
              <Sparkle size={16} />
              Buy now
            </button>
          </div>
        </div>
        <div className="oneprod-right">
          <div className="titlebrand">
            <p>
              <strong>
                {product.title}
                {product.brand}
              </strong>
            </p>
          </div>
          <div className="discrip">
            <p>{product.description}</p>
          </div>
          <div className="rating">
            <p>
              <img src={star} alt="" />
              {product.rating}
            </p>
          </div>
          <div className="star">
            <div className="afterdiscount">
              ₹{discountedPrice || product.price}
            </div>
            <div className="price">₹{product.price}</div>
            <div className="discount">{product.discountPercentage}%</div>
          </div>
          <div className="dim">
            <h2>Discription</h2>
            <p> <b> Brand  : </b>{product.brand}</p>
            <p> <b> Category  : </b>{product.category}</p>
            <p> <b> Discription  : </b>{product.description}</p>
            <p> <b> Discount  : </b>{product.discountPercentage}</p>
            <p> <b> Rating  : </b>{product.rating}</p>
            <p> <b> Stock  : </b>{product.stock}</p>
          </div>
          <div className="termsandconditions">
            <p>
              <h2>1. Terms of Service</h2>
              You need to iron out your e-commerce business s Terms of Service
              as soon as your business opens its proverbial doors. Terms of
              Service — also known as Terms of Use, Terms and Conditions, or
              Disclaimers — describe the regulations that you attach to your
              e-commerce business. Visitors have to agree to these Terms of
              Service to use your site. Through your Terms of Service policy,
              you can do the following: list prohibited user actions on your
              website reserve the right to delete accounts if the user violates
              these terms preserve ownership of the content on your site
              E-commerce businesses aren t legally required to have Terms of
              Service policies, but it s a good idea to create one nonetheless
              so that you can regulate user activity on your site. Having Terms
              of Service also lowers the likelihood of customer lawsuits against
              your business, as long as they are enforceable and fair under
              state and federal law.
            </p>
            <p>
              <h2>2. Privacy policy</h2>
              Unlike a Terms of Service policy, a privacy policy is required by
              law. Under the GDPR mentioned earlier, e-commerce businesses must
              have privacy policies that achieve the following ends:
              <ul>
                <li> Obtain customer consent for data processing</li>
                <li> Anonymize data to protect customer privacy</li>
                <li> Guarantee notification in the event of a data breach</li>
                <li> Explain careful cross-border data transfers</li>
                <li>
                  Provide a dedicated data protection officer (for
                  somecompanies)
                </li>
              </ul>
              Though the GDPR is an EU regulation, it applies to all websites
              that market goods or services to EU residents. So, unless you can
              guarantee that your e-commerce business is inaccessible for EU
              residents, you ll need to create a GDPR-compliant privacy policy.
              The good news? Many sites provide online scripts to help you
              create a personalized and compliant privacy policy for your
              e-commerce business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
