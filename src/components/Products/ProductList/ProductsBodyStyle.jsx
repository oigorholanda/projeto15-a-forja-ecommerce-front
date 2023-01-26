import styled from "styled-components"
import { cor2, cor3 } from "../../../constants/colors"

export const Sections = styled.div`
    
    padding-top: 170px;
    height: 90vh;
    margin-bottom: 25px;
    height: 100%;
`

export const SectionName = styled.div`
    height: 20px;
    width: 100%;
    color: ${cor2};
    padding-top: 3px;
    margin-bottom:3px ;
`
export const Banner = styled.div`
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
    img{
        
        height: 100px;
    }
`

export const Section = styled.div`
    background-color: ${cor3};
    padding-left: 10px;
    margin-bottom: 20px;
`

export const ProductList = styled.div`
    display: flex;
    overflow: auto;
    position: relative;
    left: -10px;
    padding-left: 10px;
`