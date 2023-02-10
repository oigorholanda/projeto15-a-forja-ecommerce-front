import axios from "axios";
import { useContext } from "react";
import { base_url } from "../constants/urls.js";
import { AuthContext } from "../contexts/AuthContext.js"



export function reciveProducts() {

    const response = axios.get(`${base_url}/products`)
    .catch((error) => {
      return error.response;
    });
    return response;
  }


export function ClickProduct() {

    const { idClicked } = useContext(AuthContext);
    const response = axios.get(`${base_url}/product/${idClicked}`)
    return response
}

// export function SelectedProduct(body) {
//   // Enviar o token e o ID do produto para cadastro
//   const { Token } = useContext(AuthContext);
//   const config = {
//     headers: { Authorization: Token },
//   };
//   const response = axios.post(`${base_url}/cart`, body, config)
//   .catch((error) => {
//     console.log(error.response);
//       if (error.response.status === 401) {navigate("/login");}
//       return error.response;
//   })
//   return response
// }