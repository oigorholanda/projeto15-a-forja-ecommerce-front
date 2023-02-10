import { useForm } from "react-hook-form";
import { Container, Title, Description, LowerContainer, SubmitBtn } from "./CheckoutStyles";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants/urls";



export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { Token, id } = useContext(AuthContext);
    const navigate = useNavigate()

    
    async function onSubmit(data){
        
        data.id = id
        const config = {
            headers: {
                Authorization: Token,
            }
          }
        const response = axios.post(`${base_url}/shipmentinfo`, data, config)
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
        {errors.email && <div><h3>Insira seu endereço</h3></div>}

        <LowerContainer>
        <div><input placeholder="Número da casa" id='number' name="number" type="number" {...register("houseNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu cep</h3></div>}

        <div><input placeholder="cep" id='number' name="number" type="number" {...register("postalCode", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira o numero sua Casa</h3></div>}
        </LowerContainer>
        
        <div><input id='pwd' name="pwd" placeholder="Complemento" type="text" {...register("details", {required:false})} /></div>
        {errors.password && <div>Digite um complemento válido</div>}
        <SubmitBtn value="Finalizar pedido" type="submit">Finalizar Pedido</SubmitBtn>
    </form>
        </div>
         

        </Container>
        </>
    )}