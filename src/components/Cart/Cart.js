import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { cor1, cor4, cor5 } from "../../constants/colors";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import CartProduct from "./CartProduct";
import { base_url } from "../../constants/urls";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [reload, setReload] = useState(false)
  const { Token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${base_url}/cart`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCart(res.data);

        let total = 0;
        res.data.forEach((item) => {
            total += Number(item.price);
        });

        setTotalBalance(total);
        console.log(total);
      })
      .catch((err) => {console.log(err.response)})
  }, [reload]);

  return (
    <ConteinerCart>
      {cart.length !== 0 ? (
        <Cheio>
          <SelectedProducts>
            Seus produtos:
            {cart.map((item,index) => {
                     return <CartProduct key={index} id={item._id} img={item.picture} name={item.name} price={item.price} setReload={setReload} reload={reload}/> 
                })}
          </SelectedProducts>

          <Resume>
            Resumo
            <div>
              <p>Valor dos produtos:</p>
              <p>{totalBalance.toFixed(2)}</p>
            </div>
            <div>
              <p>Frete:</p>
              <p>{(totalBalance.toFixed()-totalBalance+3*cart.length).toFixed(2)}</p>
            </div>
            <div>
              <em>Total:</em>
              <em>{`${(totalBalance+4+cart.length).toFixed()}.00`}</em>
            </div>
            <section>
              <Link to="/checkout-adress" className="finalize" total={totalBalance}>
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
              Continue comprando...
              <BiCart size={20} />
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
