import Product from "./Product"
import styled from "styled-components"
import { cor2, cor3 } from "../../constants/colors"
import BannerFrontal from "../../assets/Banner para loja de eletrônicos smartwatch desconto preto e vermelho.png"
import { reciveProducts } from "../../services/ProductsRoute.js"
import { useEffect, useState } from "react"

export default function Productss(){

    const [Itens, setItens] = useState([])

    
    useEffect(() => {

        const catchProducts = async () => {

            const promisse = await reciveProducts();
            console.log(promisse.data)  
            setItens(promisse.data)  
        }

            catchProducts().catch(console.error)
    },[])


return(
    <>
    <Mainframe>
    <Banner src={BannerFrontal} alt="banner frontal"/>
        <Sections id="armaduras">
        <Tag>Armaduras</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Armaduras'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>

        <Sections id="machados">
        <Tag>Machados</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Machados'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>

        <Sections id="bebidas">
        <Tag>Bebidas</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Bebidas'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>

        <Sections id="arqueria">
        <Tag>Arqueria</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Arqueria'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>

        <Sections id="espadas">
        <Tag>Espadas</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Espadas'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>

        <Sections id="outros">
        <Tag>Outros</Tag>
            <Section>  
                <ProductList>
                {Itens.map((item,index) => {
                    if(item.category === 'Outros'){
                     return <Product key={index} id={item._id} img={item.picture} name={item.name} price={item.price}/>
                    }
                })}
                </ProductList>
            </Section>
        </Sections>
        </Mainframe>
    </>
)
}

const Mainframe = styled.main`

    display:flex;
    align-items:center;
    flex-direction:column;

`
const Tag = styled.p`

    margin-top:15px;
    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 700;
    margin-right:1300px;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #ffa375;
    flex: none;
    order: 0;
    flex-grow: 0;
    
`

const Banner = styled.img`

    margin-top:10px;
    width:1500px;
    
`


const Sections = styled.div`
        width: 80%;
    margin: 0 auto;
    padding-top: 15px;
    margin-bottom: 25px;
    height: 100%;
`


const Section = styled.div`

    background-color: ${cor3};
    padding-left: 10px;
    margin-bottom: 20px;
`

const ProductList = styled.div`

    display:grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 25px;
    flex-direction:row;
    width:100%;
    margin: 0 auto;
    align-items:center;

    position: relative;
    left: -10px;
    padding-left: 10px;
`