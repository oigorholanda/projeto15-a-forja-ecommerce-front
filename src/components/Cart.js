import { useState } from "react";
import styled from "styled-components";
import { BiCart, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { cor1, cor2, cor3, cor4, cor5, cor6, cor7 } from "../constants/colors";

export default function Cart() {
  const [cart, setCart] = useState(true);
  return (
    <ConteinerCart>
      {cart ? (
        <Cheio>
          <SelectedProducts>
            Seus produtos:
            <CartProduct>
              <img
                src="https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf2cf602e6b5078b058fa4/download/05151108650348.png"
                alt="Produto 1"
              />
              <div>
                <em>Maça Estrelar</em>
                <em>
                  Quantidade <p> 1 </p>
                  <span>
                    <BiTrash size={12} />
                    REMOVER
                  </span>
                </em>
                <em>
                  Preço <p>89.90</p>
                </em>
              </div>
            </CartProduct>
            <CartProduct>
              <img
                src="https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf2f700f7b01323d07993a/download/revolver_apachw.jpg"
                alt="produto 3"
              />
              <div>
                <em>Arma maneira</em>
                <em>
                  Quantidade <p> 1 </p>
                  <span>
                    <BiTrash size={12} />
                    REMOVER
                  </span>
                </em>
                <em>
                  Preço <p>219.90</p>
                </em>
              </div>
            </CartProduct>
            <CartProduct>
              <img
                src="https://trello.com/1/cards/63cf2b0ab4823067a72f868d/attachments/63cf4937b848eb38873b24c4/download/1xg.jpg"
                alt="produto 2"
              />
              <div>
                <em>Fantasia de tucano</em>
                <em>
                  Quantidade <p> 1 </p>
                  <span>
                    <BiTrash size={12} />
                    REMOVER
                  </span>
                </em>
                <em>
                  Preço <p>109.90</p>
                </em>
              </div>
            </CartProduct>
          </SelectedProducts>

          <Resume>
            Resumo
            <div>
              <p>Valor dos produtos:</p>
              <p>999,90</p>
            </div>
            <div>
              <p>Frete:</p>
              <p>0,10</p>
            </div>
            <div>
              <em>Total:</em>
              <em>1000</em>
            </div>
            <section>
              <Link to="/checkout-card" className="finalize">
                Finalizar compra
              </Link>
              <Link to="/">
                Continuar comprando...
                <BiCart size={20} />
              </Link>
            </section>
          </Resume>
        </Cheio>
      ) : (
        <Vazio>
          <p>Seu carrinho está vazio. =/</p>
          <Link to="/">
            <button>
              Continue comprando...
              <BiCart size={20} />
            </button>
          </Link>
        </Vazio>
      )}
    </ConteinerCart>
  );
}

const SelectedProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 2px solid ${cor1};
  border-radius: 50px;
  padding: 40px;
  img {
    width: 15%;
    height: 100%;
  }
`;
const CartProduct = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5vw;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }
  em {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  p {
    font-size: 1.5vw;
  }
  span {
    display: flex;
    font-size: 0.7vw;
  }
`;

const Resume = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border: 2px solid ${cor1};
  border-radius: 50px;
  padding: 40px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 20px;
  }
  .finalize {
    color: ${cor4};
    border: 2px solid ${cor4};
    font-size: large;
  }
`;

const Cheio = styled.div`
  display: flex;
  gap: 30px;
`;

const Vazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 6vh;
`;

const ConteinerCart = styled.div`
  height: fit-content;
  min-height: 500px;
  padding: 10vh;
  font-family: "Texturina", serif;
  font-size: 2rem;
  color: white;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 325px;
    height: 44px;
    background: ${cor5} !important;
    border-radius: 8px;
    font-family: "Cinzel";
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    text-decoration: none;
    color: black;
  }
`;
