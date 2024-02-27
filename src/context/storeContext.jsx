import React,{createContext} from "react";
export const TokenContext=createContext(null);

export const TokenProvider=(props)=>{
    const storetokenInLS= (serverToken)=>{
 return localStorage.setItem('token',serverToken);
    }
   const getTokenInLS=function(){
        return localStorage.getItem('token');
     }
    return(
        <TokenContext.Provider value={{storetokenInLS,getTokenInLS}}>
            {props.children}
        </TokenContext.Provider>
    )
}