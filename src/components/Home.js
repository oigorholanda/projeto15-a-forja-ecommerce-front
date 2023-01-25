import styled from "styled-components";
import NotFound from "../images/404.png"

export default function Home() {
    return(<>
        <Main>
            <img width={"600px"} src={NotFound} alt="image of not found"/>
        </Main>
    </>)
}


const Main = styled.div`

display:flex;
flex-direction:column;
align-items:center;

img {
    margin-bottom: 70px;
}
`