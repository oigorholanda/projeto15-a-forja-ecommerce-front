import styled from "styled-components"
import { Link } from "react-router-dom"


export default function(prop){
    return(
        <>
        <Sidebar width={"200px"}>
            <Header onClick={() => {""}}>
                <img src="./icons/reorder.svg" alt="" />
            </Header>
            <Body>
                <div>
                    <Link>
                    
                    login
                    </Link>
                </div>
                <div>
                    <Link>
                    
                    Cadastro
                    </Link>
                </div>
                <div>
                <Link>
                    
                    logout
                    </Link>
                </div>
                <div> 
                    <Link>
                    
                    carrinho
                    </Link>
                </div>
            </Body>
        </Sidebar>
        </>
    )
}

const Sidebar= styled.div`
    width: ${(props) => props.width};
    background-color: #a53434;
    height: 100%;
    position: fixed;
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
        color: #251200;
    }
`