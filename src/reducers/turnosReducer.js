import { types } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

let initialStateTurno = [
    {
        id: uuidv4(),
        turno: '13:05',
        estado: "1",
    }
];

if( localStorage.getItem("turnos") === null){
    localStorage.setItem('turnos',JSON.stringify(initialStateTurno));
}else{
    initialStateTurno = JSON.parse(localStorage.getItem('turnos'));
}

export const turnosReducer = ( state = initialStateTurno, action ) => {

    switch ( action.type ) {

        case types.turnos.addTurno:

            let newItemT = {
                id: uuidv4(),
                turno: action.payload.turno,
                estado: action.payload.estado
            };

            let stateCopyT = [...state, newItemT];
            localStorage.setItem('turnos', JSON.stringify(stateCopyT));
            return stateCopyT;

        case types.turnos.editTurno:

            let stateCopyEdit = state.map((t) => {
                const {id, turno, estado} = action.payload;
                if(t.id === id){
                    t.turno = turno;
                    t.estado = estado;
                }
                return t;
            });

            localStorage.setItem('turnos',JSON.stringify(stateCopyEdit));
            return stateCopyEdit;

        case types.turnos.estado:

            let stateCopyEditEstado = state.map((t) => {
                const {id} = action.payload;
                if(t.id === id){
                    t.estado = t.estado === '1' ? '2' : '1';
                }
                return t;
            });

            localStorage.setItem('turnos',JSON.stringify(stateCopyEditEstado));
            return stateCopyEditEstado;

        case types.turnos.deleteTurno:

            let statesCopyDelete = state.filter( x => x.id !== action.payload);
            localStorage.setItem('turnos',JSON.stringify(statesCopyDelete));
            return statesCopyDelete;

        default:
            return state;
    }

}