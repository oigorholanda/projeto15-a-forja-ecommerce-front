import styled from "styled-components"
import { cor7 } from "../../constants/colors"

export const Sidebar= styled.div`
    width: ${(props) => props.width};
    background-color: ${cor7};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 140px;
    padding-left: 5px;
`
export const Header= styled.div`
    img{
        width: 35px;
    }
`
export const Body= styled.div`
    div{
        height: 35px;
        padding-left: 5px;
        width: 100%;
    }
    a{
        text-decoration: none;
        color: tan;
    }
`