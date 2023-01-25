import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/signin" element={<componente />} />
          <Route path="/signup" element={<componente />} />
          <Route path="/cart" element={<componente />} />
          <Route path="/checkout" element={<componente />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: black; //tan

`;
