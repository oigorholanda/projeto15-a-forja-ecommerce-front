import styled from "styled-components";
import logo from "../assets/logo.png";
import { cor1, cor2, cor3, cor4, cor5, cor6 } from "../constants/colors";

export default function Logo({size}) {
  return (
    <LogoContainer tamanho={`${size}px`}>
      <img src={logo} alt="" />
      <div>
      <h1>A Forja</h1>
      <p>Sua loja média val</p>
      </div>

    </LogoContainer>
  );
}

const LogoContainer = styled.div`
font-family: 'Texturina', serif;
width: ${(props)=> props.tamanho};
max-width: 500px;
font-size: 1.5vw;
color: ${cor5};
display: flex;
align-items: center;
justify-content: space-evenly;

    img {
        width: 10vw;
        max-width: 35%;
    }
    h1{
        font-family: 'Cinzel', serif;
        font-weight: 500;
        font-size: 210%; 
        margin-bottom: 10px;
    }
    div {
      margin-top: -25px;
      margin-left: -5px;
    }
`
