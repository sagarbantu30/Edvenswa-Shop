import React from "react";
import "./navbar.css";
import { Heart, HouseSimple, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import lout from "../../Assets/logout_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  const d2 = sessionStorage.getItem("firstName");
  console.log(d2);
  const d3 = sessionStorage.getItem("image");
  console.log(d3);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user-related data from session storage
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("image");
    sessionStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h3>EDVENSWA SHOPPING WEBSITE</h3>
      </div>
      <div className="home">
        <Link to="/Home" style={{ textDecoration: "none" }}>
          Home
          <HouseSimple size={32}/>
        </Link>
      </div>
      <div className="serh">
        <Link to="/ShoppingCart" style={{ textDecoration: "none" }}>
          Cart <ShoppingCart size={32} />
        </Link>
      </div>

      <div className="links">
        <Link to="/Favorite" style={{ textDecoration: "none" }}>
          Favorite <Heart size={32} />
        </Link>
        {/* <div className="fcount">0</div> */}
      </div>
      <div className="acc">
        <img src={d3} alt="" />
        <p>{d2}</p>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>
          <img src={lout} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
