import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function Cart() {
    return (
        <ConteinerCart>
        <Header/>
        Seu carrinho
        <Footer/>
        </ConteinerCart>
    )
}

const ConteinerCart = styled.div`
    height: 100vh;
`
