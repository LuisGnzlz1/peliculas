import {types} from "../types/types";

export const actionTurnoAdd = (data) => ({
    type: types.turnos.addTurno,
    payload: data
});

export const actionTurnoEdit = (data) => ({
    type: types.turnos.editTurno,
    payload: data
});

export const actionTurnoDelete = (data) => ({
    type: types.turnos.deleteTurno,
    payload: data
});

export const actionTurnoEstado = (data) => ({
    type: types.turnos.estado,
    payload: data
});
