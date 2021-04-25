import { types } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

let initialState = [
    {
        id: uuidv4(),
        nombre: 'The Matrix',
        fechapublicacion: '2021-05-05',
        estado: "1",
        turnos: []
    }
];

if( localStorage.getItem("peliculas") === null){
    localStorage.setItem('peliculas',JSON.stringify(initialState));
}else{
    initialState = JSON.parse(localStorage.getItem('peliculas'));
}

export const peliculasReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.peliculas.add:

            let newPeli = {
                id: uuidv4(),
                nombre: action.payload.nombre,
                fechapublicacion: action.payload.fechapublicacion,
                estado: action.payload.estado,
                turnos: []
            };

            let stateCopy = [...state, newPeli];
            localStorage.setItem('peliculas',JSON.stringify(stateCopy));
            return stateCopy;

        case types.peliculas.edit:

            let stateCopyEdit = state.map((peli) => {
                const {id,nombre,fechapublicacion,estado} = action.payload;
                if(peli.id === id){
                    peli.nombre = nombre;
                    peli.fechapublicacion = fechapublicacion;
                    peli.estado = estado;
                }
                return peli;
            });

            localStorage.setItem('peliculas',JSON.stringify(stateCopyEdit));
            return stateCopyEdit;

        case types.peliculas.delete:

            let statesCopyDelete = state.filter( x => x.id !== action.payload);
            localStorage.setItem('peliculas',JSON.stringify(statesCopyDelete));
            return statesCopyDelete;

        case types.peliculas.turno:
            return { }
    
        default:
            return state;
    }

}