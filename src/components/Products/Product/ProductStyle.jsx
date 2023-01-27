import styled from "styled-components"
import { cor3, cor5} from "../../../constants/colors"

export const Product = styled.div`
    width: 100px;
    height: 170px;
    background-color: ${cor3};
    padding: 5px;
    margin-right: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    img{
        width: 90px;
        height: 120px;
        border-radius: 3px;
    }
`
export const ProductDescription = styled.div`
        width: 90px;
        margin-top: 5px;
        height: 33px;
        
        
        
        p{
            font-size: 10px;
        }
`

export const ProductName = styled.div`
    height: 20px;
    overflow: hidden; 
    box-sizing: border-box;
    
    p{
    text-overflow: ellipsis;
    color:${cor5}
    }
`

export const ProductPrice = styled.div`
    height: 10px;
    margin-top: 3px;
    color:${cor5}
`