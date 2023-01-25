import { useState } from "react";
import styled from "styled-components";
import { cor4, cor5, cor7} from "../constants/colors";
import Logo from "./Logo";
import SideBar from "./SideBar/Sidebar";
import {GoThreeBars, GoSearch} from "react-icons/go"
import {BiUserCircle, BiCart} from "react-icons/bi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Hcontainer>
      <nav>
        <GoThreeBars size={35} onClick={() => setMenuOpen(!menuOpen)}>Menu</GoThreeBars>
        {menuOpen && <SideBar />}
        <Logo />
      </nav>

      <Search>
        <input type="text" placeholder="Procure os produtos" />
        <GoSearch size={30} onClick={() => {}}/>
      </Search>

      <nav>
      <BiUserCircle size={35}/>
      <p>
        Faça seu <a href="#">Login</a>
        <br /> ou <a href="#">Cadastre-se</a>
      </p>
      </nav>

      <BiCart size={40} onClick={() => {}}/>

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
  a {
    color: ${cor4};
  }
  nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Search = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  input {
    width: 90%;
    padding: 7px;
  }
`;

