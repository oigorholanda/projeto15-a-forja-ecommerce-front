import { useState } from "react";
import styled from "styled-components";
import { background, cor1, cor2, cor3, cor4, cor5, cor6, cor7 } from "../constants/colors";
import Logo from "./Logo";
import SideMenu from "./SideMenu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Hcontainer>
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
            {menuOpen && (<SideMenu />)}
      <Logo />
      <Search>      
        <input type="text" placeholder="busque aqui" />
        <p>lupa</p>
      </Search>

      <p>cadatre-se ou faça o login</p>
      <p>carrinho</p>
    </Hcontainer>
  );
}

const Hcontainer = styled.div`
background-color: ${cor7};
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  color: ${cor5};
`;

const Search = styled.div`
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    input {
        width: 90%;
    }
`
