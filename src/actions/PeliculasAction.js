import {types} from "../types/types";

export const actionAdd = (data) => ({
    type: types.peliculas.add,
    payload: data
});

export const actionEdit = (data) => ({
    type: types.peliculas.edit,
    payload: data
});

export const actionDelete = (data) => ({
    type: types.peliculas.delete,
    payload: data
});

