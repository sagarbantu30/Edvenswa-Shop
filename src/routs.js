// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Screens/Login/Login";
// import Home from "./Screens/Home/Home";
// // import Carts from "./Screens/Carts/Carts";
// import Apple from "../src/Screens/Shop/Shop";
// import Navbar from "./components/navbar";

// const Routs = () => {
//   return (
//     <div className="nav">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Apple" element={<Apple />} />
//           <Route/>
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Routs;
// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Login from "./Screens/Login/Login";
// // import SearchBar from "./components/Searchbar/searchbar";
// import Home from "./Screens/Home/Home";
// import Navbar from "./components/Navbar/navbar"
// import Favorite from "./Screens/Favorite/Favorite";
// import OneProduct from "./components/Products/OneProduct";
// import ShoppingCart from "./Screens/Carts/ShoppingCart";
// import { ShopContextProvider } from "./contexts/ShopContext";

// const Routs = () => {
//   return (
//     <BrowserRouter>
//       <InnerRoutes />
//     </BrowserRouter>
//   );
// };

// const InnerRoutes = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Define routes where Navbar should not be displayed
//   const routesWithoutNavbar = ["/"];

//   // Check if the current route is in the array of routes without Navbar
//   const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

//   // Check if the current route is in the array of routes without Navbar
//   const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

//   // Check for the presence of the token
//   const isTokenPresent = !!sessionStorage.getItem("token");

//   if (!isTokenPresent && location.pathname !== "/") {
//     // If token is not present and route is not the login route, redirect to login
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="nav">
//       {shouldDisplayNavbar && <Navbar />}
//       <ShopContextProvider>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Favorite" element={<Favorite/>}/>
//         <Route path="/OneProduct/:id" element={<OneProduct/>}/>
//         <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
//       </Routes>
//       </ShopContextProvider>
//     </div>
//   );
// };

// export default Routs;
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Favorite from "./Screens/Favorite/Favorite";
import OneProduct from "./components/Products/OneProduct";
import ShoppingCart from "./Screens/Carts/ShoppingCart";
import { ShopContextProvider } from "./contexts/ShopContext";

const Routs = () => {
  return (
    <BrowserRouter>
      <InnerRoutes />
    </BrowserRouter>
  );
};

const InnerRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const routesWithoutNavbar = ["/"];

  // Check if the current route is in the array of routes without Navbar
  const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

  // Check for the presence of the token
  const isTokenPresent = !!sessionStorage.getItem("token");

  if (!isTokenPresent && location.pathname !== "/") {
    // If token is not present and route is not the login route, redirect to login
    return navigate("/");
  }

  return (
    <div className="nav">
      {shouldDisplayNavbar && <Navbar />}
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/OneProduct/:id" element={<OneProduct />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default Routs;

