import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <Hcontainer>
      <img src={logo} alt="" />
      <div>
      <h1>A Forja</h1>
      <p>Sua loja média val</p>
      </div>

    </Hcontainer>
  );
}

const Hcontainer = styled.div`
font-family: 'Texturina', serif;
width: 100%;
font-size: 28px;
background-color:#873e16;
color: #bd8018;
display: flex;
align-items: center;
margin: auto;

    img {
        margin-top: 25px;
        width: 160px;
    }
    h1{
        font-family: 'Cinzel', serif;
        font-size: 62px; 
        margin-bottom: 10px;
    }
`
