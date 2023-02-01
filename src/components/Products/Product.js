import styled from "styled-components"
import { cor3,cor2, cor5} from "../../constants/colors"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export default function Item(prop){

        const {setClicked,idClicked } = useContext(AuthContext);
        const navigate = useNavigate();

        function Popup() {
            setClicked(prop.id)
            navigate(`produto/${prop.id}`)
        }

    return(
            <Product onClick={Popup}>
                        <img src={prop.img} alt="Imagem produto" />
                                <ProductName>{prop.name}</ProductName>
                                <ProductPrice>R$ {prop.price}</ProductPrice>    
            </Product>
    )
}

const Product = styled.div`
    height: 22vw;
    width:300px;
    margin: 5px auto;
    padding: 5px;
    background-color: ${cor3};
    display:flex;
    flex-direction:column;
    align-items:center;
    word-break: break-word;
    cursor: pointer;

    img{
        max-width: 100%;
        height: 75%;
        object-fit: scale-down;
        border-radius: 5px;
        
    }

`
const ProductDescription = styled.p`


        margin-top: 10px;
        font-size: 10px;
`

const ProductName = styled.p`

    margin-top:10px;
    font-family: 'Cinzel';
    font-size: 20px; 
    box-sizing: border-box;
    text-overflow: ellipsis;
    color:${cor5};

`

const ProductPrice = styled.p`

    font-size: 20px;
    margin-top: 10px;
    color:white;
`