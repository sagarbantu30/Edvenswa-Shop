// Favorites.js
import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import '../Carts/ShoppingCart.css'

const Favorites = () => {
  const { favorites, removeFromFavorites, updateFavoritesItemCount } = useContext(ShopContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((item) => (
        <div key={item.id} className='cart'>
        <div className="cartItem">
          <img src={item.images[0]} alt="" />
          <div className="description">
            <p>
              <b>{item.title}</b>
            </p>
            <p> Price: ₹{item.price}</p>
            <div className="countHandler">
            <button onClick={() => removeFromFavorites(item.id)}>Remove</button>
              <input
                type="number"
                value={item.count}
                onChange={(e) => updateFavoritesItemCount(Number(e.target.value), item.id)}
              />
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Favorites;
