import styled from "styled-components"
import { Link } from "react-router-dom"
import { cor7 } from "../../constants/colors"


export default function SideBar(prop){
    return(
        <>
        <Sidebar width={"200px"}>
            <Header onClick={() => {""}}>
                <img src="./icons/reorder.svg" alt="" />
            </Header>
            <Body>
                <div>
                    <Link>
                    
                    Minha Conta
                    </Link>
                </div>
                <div>
                    <Link>
                    
                    Cadastro
                    </Link>
                </div>
                <div>
                <Link>
                    
                    Pedidos
                    </Link>
                </div>
                <div> 
                    <Link>
                    
                    Carrinho
                    </Link>
                </div>
            </Body>
        </Sidebar>
        </>
    )
}

const Sidebar= styled.div`
    width: ${(props) => props.width};
    background-color: ${cor7};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 140px;
    padding-left: 5px;
`
const Header= styled.div`
    img{
        width: 35px;
    }
`

const Body= styled.div`
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