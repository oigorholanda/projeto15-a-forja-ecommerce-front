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
    const token = "5a284611-1be4-42f9-a3f3-0e196394b29e"
    const id = "63d529ed943a7ff029a61e4b"

    // const { token, id } = useContext(AuthContext);
    const navigate = useNavigate()

    
    function onSubmit(data){
        data.id = id
        const config = {
            headers: {
                Authorization: token,
            }
          }
        const response = axios.post(`${url}/shipmentinfo`, data, config)
        response.then(() => navigate("/checkout-card"))
        response.catch((error) => {
            console.log(error.response)
            return error.response;
        });
    };

    // console.log(config)
    // const savedAdress = axios.get(`${url}/shipmentinfo`, id, config)
    // savedAdress.then(console.log)
    // savedAdress.catch(console.log)

  
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
        {errors.email && <div><h3>Insira seu endereço</h3></div>}

        <LowerContainer>
        <div><input placeholder="Número da casa" id='number' name="number" type="number" {...register("houseNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu cep</h3></div>}

        <div><input placeholder="cep" id='number' name="number" type="number" {...register("postalCode", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira o numero sua Casa</h3></div>}
        </LowerContainer>
        
        <div><input id='pwd' name="pwd" placeholder="Complemento" type="text" {...register("details", {required:false})} /></div>
        {errors.password && <div>Digite um complemento válido</div>}
    <SubmitBtn> <input value="Finalizar pedido" style={{background: "#ffa375", color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
         

        </Container>
        </>
    )}