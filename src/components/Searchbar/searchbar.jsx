// SearchBar.js
import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';

const SearchBar = () => {
  const { handleSearch } = useContext(ShopContext);

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => handleSearch(e.target.value)}
      style={{fontFamily: 'poppins,sans-serif'}}
    />
  );
};

export default SearchBar;
