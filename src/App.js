import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Cart";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Register from "./components/Register"
import { cor1 } from "./constants/colors";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/produto/:id" element={<componente />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<componente />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${cor1}; //tan, black

`;
