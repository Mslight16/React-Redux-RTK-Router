
import "./App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const AddToCart = () => {

  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);

  return (

    <div className="cart-wrapper">
      <button id="cartBtn" className="cart-btn">
        <Link to="/cart"><img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-white-icon.png" className="cart-icon" />
          <span id="cartCount" className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span></Link>
      </button>


    </div>
  )
}
export default AddToCart 