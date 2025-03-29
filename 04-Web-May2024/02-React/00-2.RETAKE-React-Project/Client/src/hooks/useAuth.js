import { login, register } from "../api/auth-api";
import { useAuthcontext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useAuthcontext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);
        return authData;
    };
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);        
        return authData;
    };
    return registerHandler;
}
