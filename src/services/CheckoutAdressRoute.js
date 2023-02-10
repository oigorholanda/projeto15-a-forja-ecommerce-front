import axios from "axios";
import { useContext } from "react";
import { base_url } from "../constants/urls.js";
import { AuthContext } from "../contexts/AuthContext.js"


export function SendAdress(body) {
    const { Authorization } = useContext(AuthContext);
    const header = Authorization
    alert("joojs")
    const response = axios.post(`${base_url}/checkoutadress`, body, header)
    .catch((error) => {
        console.log(error.response)
        return error.response;
    });
    return response;
  }


  export function GetAdress(body) {
    const { Authorization } = useContext(AuthContext);
    const header = Authorization
    const response = axios.get(`${base_url}/checkoutadress`, body, header)
    .catch((error) => {
      return error.response;
    });
    return response;
  }