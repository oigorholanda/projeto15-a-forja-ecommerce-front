import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { base_url } from "../../constants/urls";

export default function CartProduct(props) {
    const { Token } = useContext(AuthContext);
    const setReload = props.setReload
    const reload = props.reload

    function removeItem(id) {
        
        axios
      .delete(`${base_url}/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        setReload(!reload);
      })
      .catch((err) => {console.log(err.response)})
    }

  return (
    <>
      <CProduct>
        <img
          src={props.img}
          alt={`Produto ${props.id}`}
        />
        <div>
          <em>{props.name}</em>
          <em>
            Quantidade <p> 1 </p>
            <span onClick={() => removeItem(props.id)}>
              <BiTrash size={12} />
              REMOVER
            </span>
          </em>
          <em>
            Preço <p>{props.price}</p>
          </em>
        </div>
      </CProduct>
    </>
  );
}

const CProduct = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5vw;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }
  em {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  p {
    font-size: 1.5vw;
  }
  span {
    display: flex;
    font-size: 0.7vw;
    cursor: pointer;
  }
`;
