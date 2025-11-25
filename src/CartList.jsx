import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CartList() {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector);

    const [cartItems, setCartItems] = useState(cartSelector)

    useEffect(() => {
        setCartItems(cartSelector)
    }, [cartSelector])


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const manageQuantity = (id, q) => {
        let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
        const cartTempItems = cartItems.map((item) => {
            return item.id == id ? { ...item, quantity } : item
        })

        setCartItems(cartTempItems)
    }

    const handlePlaceOrder = () => {
        localStorage.clear();
        dispatch(clearAllItems())
        toast.success("Order placed successfully! 🎉");
        // alert("order placed")
        navigate("/")
    }

    return (
        <>

            <div className="cart-container">
                <div className="cart-header">
                    <h2>Your Cart Items</h2>
                    <span>{cartItems.length} Items</span>
                </div>
                {
                    cartItems.length > 0 ? cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-info">
                                <img src={item.thumbnail} />
                                <div className="item-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.brand}</p>

                                </div>
                            </div>
                            <div className="item-actions">
                                <div>
                                    <input onChange={(e) => manageQuantity(item.id, e.target.value)} value={item.quantity ? item.quantity : 1} type="number" placeholder="enter quantity" />
                                    <div>
                                        <span className="cart-price">
                                            $ {(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}</span>
                                        <button onClick={() => dispatch(removeItem(item))} className="btn">Remove</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )) : null
                }
                <div className="cart-footer">
                    Total Amount:
                    ${cartItems
                        .reduce(
                            (total, item) =>
                                item.quantity
                                    ? total + item.price * item.quantity
                                    : total + item.price,
                            0
                        )
                        .toFixed(2)}
                </div>
                <button onClick={handlePlaceOrder} disabled={cartItems.length === 0} className="btn">Place Order</button>
            </div>
        </>
    )
}