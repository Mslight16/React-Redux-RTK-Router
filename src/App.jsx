import "./App.css";
import Header from "./Header";
import Product from "./Product";
import CartList from "./CartList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/products" element={<Product />} ></Route>
          <Route path="/cart" element={<CartList />} ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />

    </>
  )
}

export default App
