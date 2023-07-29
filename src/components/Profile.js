import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";
import Cart from "./Cart/Cart";

export default function Profile() {
    const { username } = useContext(AuthContext);
    return (
        <>
        <Page>
        <h1>Olá {username}!</h1>
        <br />
        <pre>Em breve você verá aqui suas últimas compras, fique com seu carrinho por enquanto:</pre>
        </Page>
        <Cart/>
        </>
    )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10vh;
  margin-bottom: -5%;
  font-family: "Texturina", serif;
  font-size: 1.8rem;
  color: white;
`