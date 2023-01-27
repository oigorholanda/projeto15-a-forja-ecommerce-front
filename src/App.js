import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Cart";
import PageCheckout from "./components/Checkout/PageCheckoutCard";
import PageCheckoutAdress from "./components/Checkout/PageCheckoutAdress";
import Products from "./components/Products/ProductList/Products";
import Login from "./components/Login";
import Register from "./components/Register"
import ProductPage  from "./components/ProductPage"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Ops404 from "./components/Ops404";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/produto/:id" element={<ProductPage/>} />
          <Route path="/carrinho" element={<Cart/>} />
          <Route path="/checkout-card" element={<PageCheckout/>} />
          <Route path="/checkout-adress" element={<PageCheckoutAdress/>} />
          <Route path="/404" element={<Ops404/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: black; 

`;
