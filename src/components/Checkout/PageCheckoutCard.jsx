import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  DescriptionCard,
  LowerContainer,
  SubmitBtn,
  CheckoutConfirm,
} from "./CheckoutStyles";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { base_url } from "../../constants/urls";

export default function App() {
  const [finalized, setFinalized] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token, id } = useContext(AuthContext);
  const navigate = useNavigate();

  function onSubmit(data) {
    data.id = id;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = axios.post(`${base_url}/paymentinfo`, data, config);
    response.then(() => {
      setFinalized(true);
      alert("compra realizada");
    });
    response.catch((error) => {
      console.log(error.response);
      alert(
        "ocorreu um erro com o servidor mas vamos te conduzir para a próxima página \n" +
          error.message
      );
      navigate("/");
      return error.response;
    });
  }

  if (!finalized) {
    return (
      <>
        <Container>
          <Title>
            <span>
              <h1>A Forja</h1> <br />
            </span>
          </Title>
          <DescriptionCard>
            <div>
              <h3> insira seu cartão:</h3> <h3>&emsp;&nbsp;</h3> <br />
            </div>
          </DescriptionCard>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  placeholder="Nome impresso no cartao"
                  id="name"
                  name="name"
                  type="name"
                  {...register("cardName", { required: true })}
                />
                {errors.cardName && (
                  <div>
                    <p>Insira um nome valido</p>
                  </div>
                )}
              </div>

              <div>
                <input
                  placeholder="Digitos do cartao"
                  id="number"
                  name="number"
                  type="number"
                  {...register("cardNumber", { required: true })}
                />
              </div>
              {errors.cardNumber && (
                <div>
                  <p>Digite o numero do seu cartao!</p>
                  <p> não insira um cartão verdadeiro! </p>
                </div>
              )}

              <LowerContainer>
                <div>
                  <input
                    placeholder="codigo de seguranca"
                    id="number"
                    name="number"
                    type="number"
                    {...register("securityNumber", {
                      required: true,
                      valueAsNumber: true,
                    })}
                  />
                </div>

                <div>
                  <input
                    id="ExpirationDate"
                    name="ExpirationDate"
                    placeholder="MM/AAAA"
                    type="month"
                    {...register("expirationDate", { required: true })}
                  />
                </div>
              </LowerContainer>
              {errors.securityNumber && (
                <div>
                  <p>Insira seu codigo de seguranca</p>
                </div>
              )}
              {errors.expirationDate && <p>Insira uma validade</p>}
              <SubmitBtn value="Finalizar Pedido" type="submit">
                Finalizar Pedido
              </SubmitBtn>
            </form>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Title>
            <span>
              <h1>A Forja</h1> <br />
            </span>
          </Title>
          <DescriptionCard>
            <div>
              <h3> Preco:</h3> <h3>&emsp;&nbsp;R$</h3> <br />
            </div>
          </DescriptionCard>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  placeholder="Nome impresso no cartao"
                  id="name"
                  name="name"
                  type="name"
                  {...register("cardName", { required: true })}
                />
              </div>
              {errors.CardName && (
                <div>
                  <p>Insira seu Email</p>
                </div>
              )}

              <div>
                <input
                  placeholder="Digitos do cartao"
                  id="number"
                  name="number"
                  type="number"
                  {...register("cardNumber", { required: true })}
                />
              </div>
              {errors.email && (
                <div>
                  <p>Digite Seu CPF</p>
                </div>
              )}

              <LowerContainer>
                <div>
                  <input
                    placeholder="codigo de seguranca"
                    id="number"
                    name="number"
                    type="number"
                    {...register("securityNumber", {
                      required: true,
                      valueAsNumber: true,
                    })}
                  />
                </div>

                <div>
                  <input
                    id="expirationDate"
                    name="expirationDate"
                    placeholder="MM/AAAA"
                    type="month"
                    dateFormat="MM/YYYY"
                    {...register("expirationDate", { required: true })}
                  />
                </div>
                {errors.securityNumber && (
                  <div>
                    <p>Insira seu Email</p>
                  </div>
                )}
                {errors.password && <div>Digite sua senha correta!</div>}
              </LowerContainer>
              <SubmitBtn>
                {" "}
                <input
                  value="Finalizar Pedido"
                  style={{ background: "#ffa375", color: "white" }}
                  type="submit"
                />
              </SubmitBtn>
            </form>
          </div>
          <CheckoutConfirm>
            <p> Você acaba de concluir sua compra no valor de (R$ ).</p>
            <p> Em breve seu pedido será enviado. </p>
            <button
              style={{ background: "#ffa375" }}
              onClick={() => navigate("/")}
            >
              Finalizar.
            </button>
          </CheckoutConfirm>
        </Container>
      </>
    );
  }
}
