import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";


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
            <p>Tem certeza de que deseja assinar o plano  (R$ )</p>
            {/* <button style={{background:'#cecece'}} onClick={() => setDisplay('none')}>NAO</button> <button onClick={() => onSubmit(0)} style={{background:'#ff4791'}}>SIM</button> */}
         </CheckoutConfirm>

        </Container>
        </>
    )}

    const Container = styled.div`
    color: white;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    span{
        width: 290px;
        
    }
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 14px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        }
        form{
            margin-top: 70px;
        }
    
`

const SubmitBtn = styled.div`
    input{
        border: none;
    }
`

const CheckoutConfirm = styled.div`
    display: ${prop => prop.display};
    width: 248px;
    height: 210px;
    z-index: 1;
    background-color: white;
    position: fixed;
    top: 40%;
    border-radius: 10px;
    color: black;
    font-size: 18px;
    padding-top: 33px;
    padding-left: 22px;
    padding-right: 22px;
    text-align: center;
    button{
        width:95px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 14px;
        color: white;
        ::placeholder{
        color:#dbdbdb;    
        }
        }
`

const Title = styled.div `
    width: 90px;
    position: relative;
    top:80px;
    
    span{
        position: relative;
    }
`
const LowerContainer = styled.div`
display: flex;
width: 303px;
justify-content: space-between;
input{
    width: 148px;
}
`

const Description = styled.div`
    width: 303px;
    position: relative;
    top: 60px;
    
    h3{
        font-size: 22px;
    }
    div{
        margin-top: 20px;
    }
`