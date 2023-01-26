import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Cart";
import PageCheckout from "./components/Checkout/PageCheckoutAdress";
import FrontPage from "./components/FrontPage";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<componente />} />
          <Route path="/cadastro" element={<componente />} />
          <Route path="/produto/:id" element={<componente />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<PageCheckout/>} />
          
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: black; //tan

`;
