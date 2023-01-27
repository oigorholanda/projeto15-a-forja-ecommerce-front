import { useState } from "react"
import styled from "styled-components"

export default function Cart() {
    const [cart, setCart] = useState(false)
    return (
        <ConteinerCart>
            {cart? <p>Seu carrinho está cheio</p>
            : <>
            <p>Seu carrinho está vazio.</p>
            <button>Continue comprando</button>
            </>
             }
        
        </ConteinerCart>
    )
}

const ConteinerCart = styled.div`
    font-size: 28px;
    height: 100vh;
    color: white;
`
