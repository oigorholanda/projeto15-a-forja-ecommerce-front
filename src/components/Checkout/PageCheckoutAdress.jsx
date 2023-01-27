import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Container, Title, Description, LowerContainer, SubmitBtn, CheckoutConfirm} from "./CheckoutStyles";


export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return(
        <>
        
        <Container>
        
        <Title>
        
        <span><h1>A Forja</h1></span>
        </Title>
        <Description>
       
        <div><h3> Insira seu endereço de entrega:</h3> </div>
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} {...register("membershipId")}>
        
        <div><input placeholder="Nome da rua" id='name' name="name" type="name" {...register("streetName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <LowerContainer>
        <div><input placeholder="Número da casa" id='number' name="number" type="number" {...register("cardNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <div><input placeholder="cep" id='number' name="number" type="number" {...register("securityNumber", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Cep</h3></div>}
        </LowerContainer>
        
        <div><input id='pwd' name="pwd" placeholder="Ponto de referencia" type="text" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
    <SubmitBtn> <input value="Finalizar pedido" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
         <CheckoutConfirm >
            <p> Você acaba de concluir sua compra no valor de (R$ ).</p>
            <p> Em breve seu pedido será enviado. </p>
            {/* <button style={{background:'#cecece'}} onClick={() => setDisplay('none')}>NAO</button> <button onClick={() => onSubmit(0)} style={{background:'#ff4791'}}>SIM</button> */}
         </CheckoutConfirm>

        </Container>
        </>
    )}