import styled from "styled-components";
import { cor1, cor2, cor3, cor4, cor6, cor7 } from "../../constants/colors";
import selo1 from "../../assets/103388.png";
import selo2 from "../../assets/5847e95fcef1014c0b5e4822.png";
import selo3 from "../../assets/5a902dbf7f96951c82922875.png";
import selo4 from "../../assets/selo-google-site-seguro.png";
import selo5 from "../../assets/selo-ra.png";
import selo6 from "../../assets/selo_ebit_kabum_horizontal.png";
import selo7 from "../../assets/selo_empresabuscape_horizontal.png";

export default function Footer() {
  return (
    <>
      <FooterMain>
        <FootersDiv>
          <Title>Institucional</Title>
          <Pages>Central de ajuda</Pages>
          <Pages>Garantia</Pages>
          <Pages>Devoluções</Pages>
          <Pages>Metódos de pagamento</Pages>
          <Pages>Como comprar</Pages>
        </FootersDiv>
        <FootersDiv>
          <Title>Siga as redes</Title>
          <Pages>Facebook</Pages>
          <Pages>Instagram</Pages>
          <Pages>Twitter</Pages>
          <Pages>Linkedin</Pages>
          <Pages>Aplicativo Android</Pages>
          <Pages>Aplicativo IOS</Pages>
        </FootersDiv>
        <FootersDiv>
          <Title>Atendimento</Title>
          <Pages2>Horário de atendimento: 08:00 às 20:00.</Pages2>
          <Pages2>Segunda a Sábado,horário de Brasília.</Pages2>
          <Pages2>Endereço:</Pages2>
          <Pages2>
            Rua Driven, 312 - 2° andar - Centro Campinas/SP - CEP: 11111-111
          </Pages2>
        </FootersDiv>
      </FooterMain>
      <FooterBooton>
        <img src={selo1} width="3%" alt="selo" />
        <img src={selo4} width="9%" alt="selo" />
        <img src={selo5} width="6%" alt="selo" />
        <img src={selo6} width="10%" alt="selo" />
        <img src={selo7} width="12%" alt="selo" />
        <img src={selo2} width="11%" alt="selo" />
        <img src={selo3} width="11%" alt="selo" />
      </FooterBooton>
      <FooterLower>
        <p>
          A Forja® é uma marca registrada de A FORJA S.A | CNPJ:
          11.111.111/1111-1 | Todos os direitos reservados. Os preços anunciados
          neste site ou via e-mail promocional podem ser alterados sem prévio{" "}
          <br /> aviso. A FORJA não é responsável por erros descritivos.
          As fotos contidas nesta página são meramente ilustrativas do produto
          e podem variar de acordo com o fornecedor/lote do fabricante. Este{" "}
          <br /> site trabalha 100% em criptografia SSL. Clique aqui e veja as
          políticas da nossa empresa. Se você leu até aqui parabéns tu é observador mesmo!
        </p>
      </FooterLower>
    </>
  );
}

const FooterLower = styled.footer`
  width: 100%;
  height: 60px;
  background-color: ${cor2};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Texturina";
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    color: ${cor6};
    font-style: normal;
    font-weight: 500;
  }
`;

const FooterMain = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${cor2};
  bottom: 0;
  
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20%;
  padding: 18px;

`


const FootersDiv = styled.div`
  width: 200px;
  height: 10vw;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  margin-top: 18px;
  
`;

const Title = styled.p`
  font-family: "Texturina";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: ${cor6};
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Pages = styled.p`
  font-family: "Texturina";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  color: ${cor3};
  font-style: normal;
  font-weight: 700;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    color: ${cor4};
  }
`;
const Pages2 = styled.p`
  font-family: "Texturina";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${cor7};
  font-style: normal;
  font-weight: 700;
  margin-bottom: 5px;
`;

const FooterBooton = styled.footer`
  width: 100%;
  height: 4%;
  background-color: ${cor1};
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img:hover {
    cursor: pointer;
    }
`;
