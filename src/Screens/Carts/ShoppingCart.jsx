// import { useContext } from 'react'
// import React from 'react';
// import { ShopContext } from '../../contexts/ShopContext';
// import './ShoppingCart.css'
// const ShoppingCart = () => {
//     const { cart, removeFromCart } = useContext(ShopContext);

//     return (
//       <div>
//         <h2>Shopping Cart</h2>
//         {cart.map((item) => (
//           <div key={item.id} className='cart'>
//             <div className="cartItem">
//       <img src={item.images[0]} alt=""/>
//       <div className="description">
//         <p>
//           <b>{item.title}</b>
//         </p>
//         <p> Price: ₹{item.price}</p>
//         <div className="countHandler">
//         <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
//           {/* <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           /> */}
//           {/* <button onClick={() => addToCart(id)}> + </button> */}
//         </div>
//       </div>
//     </div>
//           </div>
//         ))}
//       </div>
//     );
// }

// export default ShoppingCart
// ShoppingCart.js
import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className='cart'>
          <div className="cartItem">
            <img src={item.images[0]} alt="" />
            <div className="description">
              <p>
                <b>{item.title}</b>
              </p>
              <p> Price: ₹{item.price}</p>
              <div className="countHandler">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <input
                  type="number"
                  value={item.count}
                  onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
