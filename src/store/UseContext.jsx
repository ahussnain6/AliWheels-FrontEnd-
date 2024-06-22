import { createContext,useContext,  useEffect,  useState } from "react";
export const AuthContext = createContext();
export const AuthProvider =({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"));
const storetokenInLS =(serverToken,email)=>{
    setToken(serverToken);
    localStorage.setItem("email",email);
    localStorage.setItem("token",serverToken);
}
    let isloggedin = !!token;
const LogoutUser =()=>{
    setToken("");
    return localStorage.removeItem("token");}
    return( <AuthContext.Provider value={{isloggedin,storetokenInLS,LogoutUser}}>
        {children}
    </AuthContext.Provider>
    )}
export const useAuth =()=>{
    const authContextValue = useContext(AuthContext); 
    if(!authContextValue){
        console.log("UseAuth Outside of the Provider")
    }
    return authContextValue;
}