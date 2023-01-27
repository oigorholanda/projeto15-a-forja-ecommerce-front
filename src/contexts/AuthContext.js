import React, { createContext,useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [Token, setToken] = useState({});
    const [finishingCart, setFinishingCart] = useState({});

    return(
        <AuthContext.Provider value={{Token,setToken,finishingCart, setFinishingCart}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.