import styled from "styled-components";
import { cor4, cor5 } from "../../constants/colors";

export const Container = styled.div`
  color: white;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  span {
    width: 290px;
  }
  input {
    width: 303px;
    height: 45px;
    border-color: #d4d4d4;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    margin-bottom: 5px;
    box-sizing: border-box;
    padding-left: 11px;
    font-weight: 400;
    font-size: 14px;
    color: #414141;
    ::placeholder {
      color: #dbdbdb;
    }
  }
  form {
    margin-top: 70px;
  }
  p {
    font-size: 14px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 44px;
  color: ${cor4};
  border: 2px solid ${cor4};
  background: ${cor5} !important;
  border-radius: 8px;
  font-family: "Cinzel";
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

export const CheckoutConfirm = styled.div`
  display: ${(prop) => prop.display};
  width: 248px;
  height: 210px;
  z-index: 1;
  background-color: white;
  position: fixed;
  top: 40%;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  padding-top: 33px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;
  button {
    width: 95px;
    height: 45px;
    border-color: #d4d4d4;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    margin-bottom: 5px;
    box-sizing: border-box;
    padding-left: 11px;
    font-weight: 400;
    font-size: 14px;
    color: white;
    ::placeholder {
      color: #dbdbdb;
    }
  }
`;

export const Title = styled.div`
  width: 100px;
  position: relative;
  top: 80px;

  span {
    position: relative;
  }
`;
export const LowerContainer = styled.div`
  display: flex;
  width: 303px;
  justify-content: space-between;
  input {
    width: 148px;
  }
`;

export const Description = styled.div`
  width: 303px;
  position: relative;
  top: 60px;
  div {
    margin-top: 20px;
  }
`;

export const DescriptionCard = styled.div`
  width: 303px;
  position: relative;
  display: flex;
  top: 60px;
  align-items: center;
  justify-content: center;
  div {
    margin-top: 20px;
  }
`;
