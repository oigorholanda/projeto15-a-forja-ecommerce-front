import React, { createContext,useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [Token, setToken] = useState({});
    const [finishingCart, setFinishingCart] = useState({});
    const [idClicked, setClicked] = useState()
    
    return(
        <AuthContext.Provider value={{Token,setToken,finishingCart, setFinishingCart,idClicked, setClicked}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.