import { useState } from "react";
import { createContext } from "react";

let Context = createContext()

export default Context

export const ContextProvider = ({children}) =>{
    let [user,setUser] = useState(null)



    const login = (x)=>{
        setUser(x)
    }

    const logout = () =>{
        setUser(null)
    }
    let ContextData = {
        'hello':'hello',
        login:login,
        logout:logout,
        user:user,
    }
    return(
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}

