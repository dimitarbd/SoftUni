import { useState } from "react";
import { login } from "../api/auth-api";
import { useContext } from "react";

export const useLogin = () => {
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const { setUser } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        // setLoading(true);
        
            const response = await login(email, password);
            // if (response.error) {
            //     throw new Error(response.error);
            // }
            // setUser(response);
            console.log(response);
            
       
    };

    return {
        // error,
        // loading,
        loginHandler
    };
}