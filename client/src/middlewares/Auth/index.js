import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context/store";



export default function AuthMiddleware({ children }) {

    const { globalState } = useContext(StoreContext);
    const { isLoggedIn } = globalState;
    

 
    

    return (
        <>
            {isLoggedIn && children}
            {!isLoggedIn && <Navigate to="/"></Navigate>}
        </>
    )

}