import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../assets/404.png";

export default function Ops404() {
    const navigate = useNavigate()

  return (
    <Main onClick={() => navigate("/")}>
      <img width={"600px"} src={NotFound} alt="image of not found" />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 70px;
  }
`;
