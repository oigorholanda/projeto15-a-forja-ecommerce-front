import styled from "styled-components";
import { Link } from "react-router-dom";
import { cor4, cor5, cor7 } from "../../constants/colors";

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
            <a href="#armaduras">Armaduras</a>
          </div>
          <div>
            <a href="#arqueria">Arqueria</a>
          </div>
          <div>
            <a href="#bebidas">Bebidas</a>
          </div>
          <div>
            <a href="#espadas">Espadas</a>
          </div>
          <div>
            <a href="#machados">Machados</a>
          </div>
          <div>
            <a href="#outros">Outros</a>
          </div>

        </Body>
      </Sidebar>
    </>
  );
}

const Sidebar = styled.div`
  width: 15vw;
  background-color: ${cor7};
  position: absolute;
  top: 150px;
  left: 0vh;
  margin-right: -270px;
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

