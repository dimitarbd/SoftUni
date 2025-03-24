import { useContext } from "react";

import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const response = await login(email, password);

        changeAuthState(response);
        return response;
    };
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const response = await register(email, password);

        changeAuthState(response);
        return response;
    };
    return registerHandler;
}
