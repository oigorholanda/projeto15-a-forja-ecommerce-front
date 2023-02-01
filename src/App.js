import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Card/Cart";
import PageCheckout from "./components/Checkout/PageCheckoutCard";
import PageCheckoutAdress from "./components/Checkout/PageCheckoutAdress";
import Login from "./components/Login";
import Register from "./components/Register"
import ProductPage  from "./components/Products/ProductPage"
import Footer from "./components/Page/Footer";
import Header from "./components/Page/Header";
import Ops404 from "./components/Ops404";
import Prod from "./components/Products/Prod"

export default function App() {

    

  return (
    <ContainerApp>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Prod/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/produto/:id" element={<ProductPage/>} />
          <Route path="/carrinho" element={<Cart/>} />
          <Route path="/checkout-card" element={<PageCheckout/>} />
          <Route path="/checkout-adress" element={<PageCheckoutAdress/>} />
          <Route path="/*" element={<Ops404/>} />
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
