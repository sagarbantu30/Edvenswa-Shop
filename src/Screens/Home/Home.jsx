// Home.js
import React from 'react';
import ProductList from '../../components/Products/products';
import SearchBar from '../../components/Searchbar/searchbar';
import lhside from '../../Assets/products/delivery-truck-svgrepo-com.svg';
import rhside from '../../Assets/products/online-shop-svgrepo-com.svg';
// import { ShopContextProvider } from '../../contexts/ShopContext';
import './Home.css'
import { FileSearch } from 'phosphor-react';
import ProductList2 from '../../components/Products/Product2';

const Home = () => {
  return (
    // <ShopContextProvider>
      <div className='main'>
        <div className="sub1">
          <div className="lh"><img src={lhside} alt="" /></div>
          <SearchBar />
          <div className="in"><FileSearch size={32}/></div>
          <div className="rh"><img src={rhside} alt="" /></div>
        </div>
          <div className="a1"><h3>New Arrivals</h3></div>
        <div className="sub2">
          <div className="a2"><ProductList /></div>
        </div>
          <div className="b1"><h3>Offers</h3></div>
        <div className="sub3">
          <div className="b2"><ProductList2/></div>
        </div>
      </div>
    // </ShopContextProvider>
  );
};

export default Home;
