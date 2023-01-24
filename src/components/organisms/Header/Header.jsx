import React from "react";
import "./Header.scss";
import { useLocation } from 'react-router-dom'
import logo from "../../../static/images/logo.png";
import { Link } from "react-router-dom";
import useForm from "../../../utils/UseFormLogin";
import MiniCart from "../MiniCart/MiniCart";
const Header = () => {
  const { getEmail } = useForm();
  const location = useLocation();
  let searchQuery = location.pathname;
  let data=<div></div>;
  if(searchQuery==="/register" ){
    data=<div></div>
   } else if(searchQuery==="/login" ){
    data=<div></div>
   }
  else{
    data=<div>Welcome {getEmail()}</div>
  }
    return (
        <div className="headerBody">
            <header className="header">
                <div className="headerBox">
                    <Link to="/">
                        <img src={logo} alt="app logo" className="logoMain"></img>
                    </Link>
                    <nav className="headerNav">
                        <Link to="/" className="linkNav">
                            Home
                        </Link>
                        <Link to="/products" className="linkNav">
                            Products
                        </Link>
                    </nav>
                    <span className="userEmail">{data}</span>
                    <div className="headerNavWrapper">
                        <nav className="headerNavLogin">
                            <Link to="/login" className="linkNav">
                                LogIn
                            </Link>
                            <Link to="/register" className="linkNav">
                                Register
                            </Link>
                        </nav>
                    <MiniCart />
                    </div>
                </div>

       
      </header >
    </div >
  );
}
export default Header;