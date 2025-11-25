import { useDispatch } from "react-redux";
import "./App.css";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
import { useSelector } from "react-redux";
 
const Product = () => {
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(fetchProducts())
    }, []);

    const productSelector = useSelector((state) => state.products.items);
    console.log( productSelector);

     const cartSelector = useSelector((state)=>state.cart.items);
    console.log("selector",cartSelector.length);
    
    return (
        
        <div className="grid">
           
            {
              productSelector.length && productSelector.map((item)=>(
                <div className="card" key={item.id}>
                    <img src={item.thumbnail}/>
                    <div className="content">
                        <div className="title">{item.title}</div>
                        <div className="brand">{item.brand}</div>
                        <div className="price">$ {item.price}</div>
                        <div className="rating">{item.rating}</div>
                        {
                            cartSelector.find(cartItem =>cartItem.id===item.id) ? 
                            <button  onClick={()=>dispatch(removeItem(item))  } className="remove-from-cart">Remove From Cart</button>
                            :
                            <button onClick={()=>dispatch(addItem(item))  } className="add-to-cart ">Add To Cart</button>
                        }
                    </div>
                </div>
            ))
           
            }
          
        </div>
    )
}
export default Product




























































//   <img src="https://shopatsc.com/cdn/shop/files/CH520_A__2500x2500_3981f43e-bf07-4246-98fd-42a92f3c33e8.jpg?v=1745490430" alt="Product Image" className="product-img" />

//             <div className="product-content">
//                 <h2 className="product-title">Wireless Headphones</h2>
//                 <p className="product-description">
//                     High-quality sound with deep bass, bluetooth 5.1 and 30hr battery backup.
//                 </p>

//                 <div className="product-price">
//                     <span>₹1299</span>
//                 </div>

//                 <button onClick={()=>dispatch(addItem(1))  } className="add-to-cart">Add to Cart</button>
//                 <button onClick={()=>dispatch(removeItem(1))  } className="remove-from-cart">Remove from Cart</button>
                
//             </div>