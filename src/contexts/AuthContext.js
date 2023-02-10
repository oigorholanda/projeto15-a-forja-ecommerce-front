import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [Token, setToken] = useState([]);
    const [backProduct, setBackProduct] = useState(false);
    const [username, setUsername] = useState();
    const [idClicked, setClicked] = useState();
    
    return(
        <AuthContext.Provider value={{Token, setToken, backProduct, setBackProduct, idClicked, setClicked, username, setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.