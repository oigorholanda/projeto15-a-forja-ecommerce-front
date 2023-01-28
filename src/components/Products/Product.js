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
                                <ProductPrice>oz. {prop.price}</ProductPrice>    
            </Product>
    )
}

const Product = styled.div`

    margin-top:5px;
    margin-bottom:5px;
    box-sizing: border-box; 
    background-color: ${cor3};
    width:290px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    word-break: break-all;
    cursor: pointer;

    img{
        width: 270px;
        height: 290px;
        border-radius: 3px;
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
    overflow: hidden; 
    box-sizing: border-box;
    text-overflow: ellipsis;
    color:${cor5}

`

const ProductPrice = styled.p`

font-size: 20px;
    margin-top: 10px;
    color:white;
`