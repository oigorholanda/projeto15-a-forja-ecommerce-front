import styled from "styled-components"
import GlobalStyle from "../../../GlobalStyle"
import { Container, Sections, Recommended, Section, Banner } from "./ProductsBodyStyle"
import Product from "../Components/Product/Product"
import Sidebar from "../Components/SideBar/Sidebar"


export default function(){


return(


    <>

        {/* <Sidebar/> */}
        <Sections>
            <Section>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/>  
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/>
            </Section>
            {/* <Banner>
                // Não sei se vou colocar um banner, provavelmente não 
            </Banner> */}
            <Section>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>           
            </Section>
            
            <Section>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>            
            </Section>
            
            <Section>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>
            <Product img={"https://stores.renstore.com/product_images/uploaded_images/hose-with-chamfron-copy.jpg"} name={"cavalo manco"} price={0.4}/> <Product/>

            </Section>
        </Sections>
    
    </>
)
}

