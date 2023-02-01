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
    const response = axios.get(`${url}/product/${idClicked}`)
    return response
}

export function SelectedProduct() {
  // Enviar o token e o ID do produto para cadastro
  const { token } = useContext(AuthContext);
  console.log(token)
  const response = axios.post(`${url}/cart`)
  return response
}