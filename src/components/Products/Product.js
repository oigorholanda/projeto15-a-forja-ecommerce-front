import styled from "styled-components";
import { cor1, cor3, cor5 } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Item(prop) {
  const { setClicked } = useContext(AuthContext);
  const navigate = useNavigate();

  function Popup() {
    setClicked(prop.id);
    navigate(`produto/${prop.id}`);
  }

  return (
    <Product onClick={Popup}>
      <img src={prop.img} alt="Imagem produto" />
      <ProductName>{prop.name}</ProductName>
      <ProductPrice>R$ {prop.price}</ProductPrice>
    </Product>
  );
}

const Product = styled.div`
  height: 400px;
  width: 300px;
  margin: 5px auto;
  padding: 5px;
  background-color: ${cor3};
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-word;
  border: solid 1px;
  border-color: ${cor1};
  padding: 15px;
  cursor: pointer;
  border-radius: 15px;
  img {
    object-fit: cover;
    max-width: 270px;
    height: 70%;
    border-radius: 10px;
  }
  @media (min-width: 2560px) {
    height: 600px;
    width: 440px;
    img {
      max-width: 400px;
      height: 70%;
    }
  }
`;

const ProductName = styled.p`
  margin-top: 10px;
  font-family: "Cinzel";
  font-size: 20px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  color: ${cor5};
`;

const ProductPrice = styled.p`
  font-size: 20px;
  margin-top: 10px;
  color: white;
`;
