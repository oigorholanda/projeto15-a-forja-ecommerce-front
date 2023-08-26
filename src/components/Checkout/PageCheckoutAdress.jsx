import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Description,
  LowerContainer,
  SubmitBtn,
} from "./CheckoutStyles";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants/urls";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Token, id } = useContext(AuthContext);
  const navigate = useNavigate();

  async function onSubmit(data) {
    data.id = id;
    const config = {
      headers: {
        Authorization: Token,
      },
    };
    const response = axios.post(`${base_url}/shipmentinfo`, data, config);
    response.then(() => navigate("/checkout-card"));
    response.catch((error) => {
      alert(
        "ocorreu um erro com o servidor mas vamos te conduzir para a próxima página \n" +
          error.message
      );
      console.log(error.response);
      navigate("/checkout-card");
      return error.response;
    });
  }

  return (
    <>
      <Container>
        <Title>
          <span>
            <h1>A Forja</h1>
            <br />
          </span>
        </Title>
        <Description>
          <div>
            <h3> Insira seu endereço de entrega:</h3> <br />{" "}
          </div>
        </Description>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                placeholder="Nome da rua"
                id="name"
                name="name"
                type="adress"
                {...register("streetName", { required: true })}
              />
              {errors.streetName && (
                <div>
                  <p>Insira sua rua</p>
                </div>
              )}
            </div>

            <LowerContainer>
              <div>
                <input
                  placeholder="Número da casa"
                  id="number"
                  name="number"
                  type="house number"
                  {...register("houseNumber", { required: true })}
                />
              </div>

              <div>
                <input
                  placeholder="cep"
                  id="number"
                  name="house number"
                  type="zip"
                  {...register("postalCode", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
            </LowerContainer>
            {errors.postalCode && (
              <div>
                <p>Digite Seu cep</p>
              </div>
            )}
            {errors.houseNumber && (
              <div>
                <p>Insira o numero sua Casa</p>
              </div>
            )}

            <div>
              <input
                id="complemento"
                name="complemento"
                placeholder="Complemento"
                type="details"
                {...register("details", { required: false })}
              />
              {errors.details && <div>Digite um complemento válido</div>}
            </div>
            <SubmitBtn value="Ir para pagamento" type="submit">
              Ir para pagamento
            </SubmitBtn>
          </form>
        </div>
      </Container>
    </>
  );
}
