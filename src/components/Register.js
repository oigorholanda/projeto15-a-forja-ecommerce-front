import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import Go from "../images/G.png"

export default function Signup() {

    const [form, setForm] = useState({});
    const navigate = useNavigate();

    function handleForm({ value, name }) {
      setForm({...form,[name]: value,});
    }

    function handleSendForm (event) {
        event.preventDefault();
        console.log(form)
        if(!form.name || !form.email || !form.password){
          return alert("Preencha os campos corretamente");
        }
        console.log(form)
          navigate("/signin");
    }

    function emBreve(){
        return alert("Em breve...")
    }

    return (
        <>
        <Background>
        <Form autoComplete="off">
                <ConteinerTop>
                    <LoginText>Registro</LoginText>
                    <LoginDescription>Coloque seus dados para se cadastrar no site.</LoginDescription>
                </ConteinerTop>
                <ContainerBot>
                    <TextPass>Nome</TextPass>
                    <Senha placeholder="Digite seu nome" name="name" type="text"
         onChange={(name) => handleForm({ name: name.target.name, value: name.target.value})}>
         </Senha>
                    <TextEmail>Email</TextEmail>
                    <Email placeholder="Digite seu e-mail" name="email" type="email"
        onChange={(email) => handleForm({name: email.target.name,value: email.target.value, })}>
        </Email>
                    <TextPass>Senha</TextPass>
                    <Senha placeholder="Digite sua senha" name="password" type="password" 
                    onChange={(e) => handleForm({name: e.target.name, value: e.target.value,})}>
                    </Senha>
                <Entrar onClick={handleSendForm}><p>REGISTRAR-SE</p></Entrar>
                <Or>Ou</Or>
                <GoogleBox>
                    <GoogleContainer>
                        <Google src={Go}></Google>
                        <Googletext onClick={emBreve}>Registre com o Google</Googletext>
                    </GoogleContainer>
                </GoogleBox>
                <Link to="/signin">
                <RegisterBox>Já tem uma conta?<span>Logue!</span></RegisterBox>
                </Link>
                </ContainerBot>
                </Form>
            </Background>
        </>
    )
}


const Form = styled.form`

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`;

const Background = styled.main`

    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:50px;

`

const ConteinerTop = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 330px;
    height: 71px;

`
const LoginText = styled.p`

    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 700;
    margin-left:80px;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #ffa375;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const LoginDescription = styled.p`

    font-family: 'Texturina';
    font-style: normal;
    font-weight: 400;
    color:white;
    font-size: 14px;
    line-height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;

`
const ContainerBot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    margin-top:10px;
`

  const TextEmail = styled.p`

    font-family: 'Cinzel';
    color:#ffa375;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;

  `
  const TextPass = styled.p`

    font-family: 'Cinzel';
    color:#ffa375;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    margin-top:10px;
    
  `


const Email = styled.input`
    box-sizing: border-box;
    width: 327px;
    height: 44px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    }
`


const Senha = styled.input`

    box-sizing: border-box;
    width: 327px;
    height: 44px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;

    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    }
`


const Entrar = styled.button`

    margin-top:20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 44px;
    background: #ffa375;
    border-radius: 8px;
    cursor: pointer;
    border:none;

    p{
    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color:black !important;
    flex: none;
    order: 0;
    flex-grow: 0;
    }

`


const RegisterBox = styled.p`

    margin-top:15px;
    width: 327px;
    height: 21px;
    left: 24px;
    top: 694px;
    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #deb876;
    cursor: pointer;
    margin-bottom:50px;

    span{
        color:#ffa375;
    }
    &:hover{
        text-decoration: underline;
        text-decoration-color:WHITE;
    }

`

const Or = styled.p`

    color:#deb876;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-left:150px;
    margin-top:10px;
    margin-bottom:10px;

`

const GoogleBox = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 90px;
    gap: 10px;
    width: 327px;
    height: 44px;
    left: 24px;
    top: 630px;
    background-color:#ffa375;
    border: 1px solid #deb876;
    border-radius: 8px;
    cursor: pointer;
`
const GoogleContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 180px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const Google = styled.img`
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const Googletext = styled.p`

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: black;
    flex: none;
    order: 1;
    flex-grow: 0;
    
`