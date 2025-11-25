import "./App.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Home() {
    const navigate = useNavigate()

    const shopNow = () => {
        navigate('/products')
    }

    return (
        <>
            <div className="home-container">
                <h1>Welcome To ShopeWave</h1>
                <p>Discover top brands, exclusive deals, and lightning-fast delivery all in one place. With a seamless interface, secure payments, real-time order tracking, and 24/7 support, our app brings the entire marketplace to your fingertips. Shop smarter, save more, and enjoy a hassle-free shopping journey—anytime, anywhere!</p>
                <button onClick={shopNow} className="home-btn">Shop Now  <FaArrowRight className="arrow-icon" /></button>
            </div>

        </>
    )
}

export default Home