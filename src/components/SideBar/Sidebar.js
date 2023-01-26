import styled from "styled-components";
import { Link } from "react-router-dom";
import { cor4, cor5, cor7 } from "../../constants/colors";

export default function SideBar() {
  return (
    <>
      <Sidebar>
        <Body>
          <div>
            <Link>Minha Conta</Link>
          </div>
          <div>
            <Link>Cadastro</Link>
          </div>
          <div>
            <Link>Pedidos</Link>
          </div>
          <div>
            <Link>Carrinho</Link>
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
`;
