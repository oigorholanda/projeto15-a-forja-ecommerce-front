import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [Token, setToken] = useState(["5702bdae-8c1b-4c17-a888-d6b968bc2178"]);
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