import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Products from "./components/Products/Page/Products";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Products></Products>} />
          {/* <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} /> */}
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #38220d;
`;
