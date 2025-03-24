import { useContext } from "react";

import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...rest } = await login(email, password);

        changeAuthState(rest);
        return rest;
    };
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...rest } = await register(email, password);

        changeAuthState(rest);        
        return rest;
    };
    return registerHandler;
}
