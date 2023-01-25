import { Link } from "react-router-dom"
import {Product, ProductDescription, ProductName, ProductPrice} from "./ProductStyle"


export default function product(prop){
    return(
        <Link style={{textDecoration:'none'}}>
            <Product>
                        <img src={prop.img} alt="" />
                        <ProductDescription>
                            <ProductName>
                                <p>{prop.name}</p>
                            </ProductName>
                            <ProductPrice>
                                <p>{prop.price}</p>
                            </ProductPrice>
                        </ProductDescription>
                        
            </Product>
        </Link>
    )
}

