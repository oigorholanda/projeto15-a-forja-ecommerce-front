import axios from "axios";
import { base_url } from "../constants/urls";


// LOGIN AUTH
export function signIn(body) {
  const response = axios.post(`${base_url}/sign-in`, body)
  .catch((error) => {
    return error.response;
  });
  return response;
}

// REGISTER AUTH
export function signUp(body) {
  const response = axios.post(`${base_url}/sign-up`, body);
  return response;
}
