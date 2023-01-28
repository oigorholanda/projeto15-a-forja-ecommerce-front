import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Container, Title, Description, LowerContainer, SubmitBtn } from "./CheckoutStyles";
import { SendAdress } from "../../services/CheckoutAdressRoute";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";



export default function App() {
    const url =  "http://localhost:5000"
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const Authorization = "5a284611-1be4-42f9-a3f3-0e196394b29e"
    const id = "63d529ed943a7ff029a61e4b"
    // const { Authorization, id } = useContext(AuthContext);
    const navigate = useNavigate()

    function onSubmit(data){
        data.id = id
        const header = Authorization
        const config = {
            headers: {
              Authorization: Authorization,
            }
          }
        const response = axios.post(`${url}/shipmentinfo`, data, config)
        response.then(() => navigate("/checkout-card"))
        response.catch((error) => {
            console.log(error.response)
            return error.response;
        });
    };
  
    return(
        <>
        
        <Container>
        
        <Title>
        
        <span><h1>A Forja</h1><br/></span>
        </Title>
        <Description>
       
        <div><h3> Insira seu endereço de entrega:</h3> <br/> </div>
       
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div><input placeholder="Nome da rua" id='name' name="name" type="name" {...register("streetName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <LowerContainer>
        <div><input placeholder="Número da casa" id='number' name="number" type="number" {...register("houseNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <div><input placeholder="cep" id='number' name="number" type="number" {...register("postalCode", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Cep</h3></div>}
        </LowerContainer>
        
        <div><input id='pwd' name="pwd" placeholder="Complemento" type="text" {...register("details", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
    <SubmitBtn> <input value="Finalizar pedido" style={{background: "#ffa375", color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
         

        </Container>
        </>
    )}