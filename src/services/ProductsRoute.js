import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js"

const url = process.env.REACT_APP_API_URL

export function reciveProducts() {

    const response = axios.get(`${url}/products`)
    .catch((error) => {
      return error.response;
    });
    return response;
  }


export function ClickProduct() {

    const { idClicked } = useContext(AuthContext);
    console.log(idClicked)
    const response = axios.get(`${url}/product/${idClicked}`)
    return response
}