import { createContext, useEffect, useReducer } from "react";

const initialValue = {
    user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
}

export const AuthContext = createContext(initialValue);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                toke: null,
                role: null,
                loading: false,
                error: null
            }

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                toke: action.token,
                role: action.role,
                loading: false,
                error: null
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT":
            return {
                user: null,
                toke: null,
                role: null,
                loading: false,
                error: null
            }
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialValue)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.toke);
        localStorage.setItem("role", state.role);
    }, [state]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}