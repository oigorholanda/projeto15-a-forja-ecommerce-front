import styled from "styled-components"
import { Container, Sections, Recommended, Section, Banner } from "./ProductsBodyStyle"
import Product from "../Product/Product"
import Sidebar from "../SideBar/Sidebar"


export default function(){


return(


    <>

        
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

