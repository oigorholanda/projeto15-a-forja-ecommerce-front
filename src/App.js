import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Cart";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Register from "./components/Register"
import ProductPage  from "./components/ProductPage"
import { cor1 } from "./constants/colors";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/produto/:id" element={<ProductPage/>} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<componente />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: black; //tan, black

`;
