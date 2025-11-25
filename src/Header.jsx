import "./App.css";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopWave 🌊</div>

      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>


      </nav>
      <AddToCart />


    </header>
  )
}
export default Header