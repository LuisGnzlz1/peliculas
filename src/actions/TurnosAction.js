import {types} from "../types/types";

export const login = (data) => ({
    type: types.auth.login,
    payload: data
});

export const auth = (data) => ({
    type: types.auth.auth,
    payload: data
});

export const logout = () => ({
    type: types.auth.logout
});
