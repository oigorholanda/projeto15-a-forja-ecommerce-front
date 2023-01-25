import { Link } from "react-router-dom"
import { Sidebar, Header, Body } from "./SidebarStyle"


export default function SideBar(prop){
    return(
        <>
        <Sidebar width={"200px"}>
            <Header>
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


