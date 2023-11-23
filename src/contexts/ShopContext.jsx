// // ShopContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { PRODUCTS } from '../network/endpoints';
// import { clientGet } from '../network/client';

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     clientGet (PRODUCTS)
//       .then(response => {
//         console.log(response.data.products);
//         setProducts(response.data.products);
//         setFilteredProducts(response.data.products);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleSearch = (searchTerm) => {
//     // Filter products based on the search term
//     const filtered = products.filter(product =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   const addToCart = (product) => {
//     const existingItemIndex = cart.findIndex(item => item.id === product.id);

//     if (existingItemIndex !== -1) {
//       // If the item is already in the cart, update its count
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].count += 1;
//       setCart(updatedCart);
//     } else {
//       // If the item is not in the cart, add it with count 1
//       setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   const addToFavorites = (product) => {
//     setFavorites(prevFavorites => [...prevFavorites, product]);
//   };

//   const removeFromFavorites = (productId) => {
//     setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
//   };

//   const contextValue = {
//     products,
//     filteredProducts,
//     cart,
//     favorites,
//     handleSearch,
//     addToCart,
//     removeFromCart,
//     addToFavorites,
//     removeFromFavorites,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
// ShopContext.js
import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../network/endpoints';
import { clientGet } from '../network/client';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    clientGet (PRODUCTS)
      .then(response => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    // Filter products based on the search term
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its count
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with count 1
      setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartItemCount = (count, productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, count } : item
      )
    );
  };

  const addToFavorites = (product) => {
    const existingItemIndex = favorites.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the Favorites, update its count
      const updatedFavorites = [...favorites];
      updatedFavorites[existingItemIndex].count += 1;
      setFavorites(updatedFavorites);
    } else {
      // If the item is not in the Favorites, add it with count 1
      setFavorites(prevFavorites => [...prevFavorites, { ...product, count: 1 }]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
  };

  const updateFavoritesItemCount = (count, productId) => {
    setFavorites(prevFavorites =>
      prevFavorites.map(item =>
        item.id === productId ? { ...item, count } : item
      )
    );
  };

  const contextValue = {
    products,
    filteredProducts,
    cart,
    favorites,
    handleSearch,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    addToFavorites,
    removeFromFavorites,
    updateFavoritesItemCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
