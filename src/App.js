import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
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
