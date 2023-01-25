import styled from "styled-components";
import selo1 from "../images/103388.png"
import selo2 from "../images/5847e95fcef1014c0b5e4822.png"
import selo3 from "../images/5a902dbf7f96951c82922875.png"
import selo4 from "../images/selo-google-site-seguro.png"
import selo5 from "../images/selo-ra.png"
import selo6 from "../images/selo_ebit_kabum_horizontal.png"
import selo7 from "../images/selo_empresabuscape_horizontal.png"

export default function Footer() {
    return(<FixedBottom>
        <FooterMain>
            <FootersDiv>
                <Title>Institucional</Title>
                <Pages>Central de ajuda.</Pages>
                <Pages>Garantia.</Pages>
                <Pages>Devoluções.</Pages>
                <Pages>Metódos de pagamento.</Pages>
                <Pages>Como comprar.</Pages>
            </FootersDiv>
            <FootersDiv>
            <Title>Siga as redes</Title>
                <Pages>Facebook.</Pages>
                <Pages>Instagram.</Pages>
                <Pages>Twitter.</Pages>
                <Pages>Linkedin.</Pages>
                <Pages>Aplicativo Android.</Pages>
                <Pages>Aplicativo IOS.</Pages>
            </FootersDiv>
            <FootersDiv>
            <Title>Atendimento</Title>
                <Pages>Horário de atendimento: 08:00 às 20:00.
                </Pages>
                <Pages>Segunda a Sábado,horário de Brasília. 
                </Pages>
                <Pages>Endereço:
                </Pages>
                <Pages>Rua Driven, 312 -
                2° andar - Centro
                Campinas/SP - CEP: 11111-111</Pages> 
            </FootersDiv>
        </FooterMain>
        <FooterBooton>
            <img src={selo1} width="70px" alt="selo"/>
            <img src={selo4} alt="selo"/>
            <img src={selo5} width="120px" alt="selo"/>
            <img src={selo6} alt="selo"/>
            <img src={selo7} alt="selo"/>
            <img src={selo2} width="200px" alt="selo"/>
            <img src={selo3} width="200px" alt="selo"/>
        </FooterBooton>
        <FooterLower>
            <p>A forja!® é uma marca registrada de A FORJA S.A | CNPJ: 11.111.111/1111-1 | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio <br/> aviso. A FORJA! não é responsável por erros descritivos. Asfotos contidas nesta página são meramente ilustrativas do produto epodem variar de acordo com o fornecedor/lote do fabricante. Este <br/> site trabalha 100% em criptografia SSL.  Clique aqui e veja as políticas de nossa empresa.</p>
        </FooterLower>
    </FixedBottom>)

    }

const FooterLower = styled.footer`

    width:100%;
    height:60px;
    background-color:#bd8018;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    p{
        font-family: 'Texturina';
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;;
    color:#2e0000;
    font-style: normal;
    font-weight: 500;
    }
`


const FooterMain = styled.footer`

    width:100%;
    height:300px;
    background-color:#bd8018;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:20%;
   
`

const FootersDiv = styled.div `

    width:200px;
    height:250px;
    display:flex;
    flex-direction:column;
    border-radius:18px;
    
    
`

const Title = styled.p`

    font-family: 'Texturina';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color:#ffa375;
    font-style: normal;
    font-weight: 700;
    margin-bottom:20px;

`

const Pages = styled.p `

    font-family: 'Texturina';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color:#2e0000;
    font-style: normal;
    font-weight: 700;
    margin-bottom:5px;

`

const FooterBooton = styled.footer`

    width:100%;
    height:120px;
    background-color:#ab8965;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

`

const FixedBottom = styled.div`
    width: 100%;
    
    bottom: 0;
    right: 0;
`