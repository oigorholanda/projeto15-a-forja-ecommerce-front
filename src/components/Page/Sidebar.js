import styled from "styled-components";
import { Link } from "react-router-dom";
import { cor4, cor5, cor7 } from "../../constants/colors";
import { HashLink } from "react-router-hash-link";

export default function SideBar() {
  return (
    <>
      <Sidebar>
        <Body>
          <div>
            <Link to="/login">Minha Conta</Link>
          </div>
          <div>
            <Link to="/cadastro">Cadastrar</Link>
          </div>

          <div>
            <Link to="/carrinho">Carrinho</Link>
          </div>
          <section></section>
          <div>
            <HashLink smooth to="/#armaduras">Armaduras</HashLink>
          </div>
          <div>
            <HashLink smooth to="/#arqueria">Arqueria</HashLink>
          </div>
          <div>
            <HashLink smooth to="/#bebidas">Bebidas</HashLink>
          </div>
          <div>
            <HashLink smooth to="/#espadas">Espadas</HashLink>
          </div>
          <div>
            <HashLink smooth to="/#machados">Machados</HashLink>
          </div>
          <div>
            <HashLink smooth to="/#outros">Outros</HashLink>
          </div>

        </Body>
      </Sidebar>
    </>
  );
}

const Sidebar = styled.div`
  width: 14vw;
  height: max-content;
  background-color: ${cor7};
  position: absolute;
  top: 140px;
  left: 0vh;
  margin-right: -270px;
  border-radius: 0px 0px 50px 0px;
  padding: 20px;
  font-size: 1.5vw;
  font-family: "Texturina", serif;
`;

const Body = styled.div`
  div {
    margin-bottom: 15px;
    padding-left: 5px;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: tan;
    &:hover {
      color: ${cor4};
    }
  }
  section {
    width: 100%;
    height: 1px;
    background-color: tan;
    margin: 10px auto;
  }
`;

