import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container, Title, Description, LowerContainer, SubmitBtn} from "./CheckoutStyles";


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
       
        <div><h3> Preco:</h3> <h3>&emsp;&nbsp;R$</h3></div>
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} {...register("membershipId")}>
        
        <div><input placeholder="Nome impresso no cartao" id='name' name="name" type="name" {...register("cardName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="Digitos do cartao" id='number' name="number" type="number" {...register("cardNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <LowerContainer>
        <div><input placeholder="codigo de seguranca" id='number' name="number" type="number" {...register("securityNumber", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="validade" type="month" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
        </LowerContainer>
    <SubmitBtn> <input value="Cadastrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
         {/* <CheckoutConfirm >
            <p>Tem certeza de que deseja assinar o plano  (R$ )</p>
            <button style={{background:'#cecece'}} onClick={() => setDisplay('none')}>NAO</button> <button onClick={() => onSubmit(0)} style={{background:'#ff4791'}}>SIM</button>
         </CheckoutConfirm> */}

        </Container>
        </>
    )}