import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js"

const url = process.env.REACT_APP_API_URL

export function SendAdress(body) {
    const { Authorization } = useContext(AuthContext);
    const header = Authorization
    alert("joojs")
    const response = axios.post(`${url}/checkoutadress`, body, header)
    .catch((error) => {
        console.log(error.response)
        return error.response;
    });
    return response;
  }


  export function GetAdress(body) {
    const { Authorization } = useContext(AuthContext);
    const header = Authorization
    const response = axios.get(`${url}/checkoutadress`, body, header)
    .catch((error) => {
      return error.response;
    });
    return response;
  }