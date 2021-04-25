import { useState } from 'react';
import dateFnsFormat from 'date-fns/format';

export const useFormPeliculas = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = (valor, tipo = 'text', campo) => {

        if(tipo === 'text'){

            setValues({
                ...values,
                [ campo ]: valor.target.value
            });


        }else if(tipo === 'event') {

            setValues({
                ...values,
                [ campo ]: valor
            });

        }else if(tipo === 'fecha' || tipo === 'hora') {

            console.log(dateFnsFormat(valor, 'yyyy-MM-dd').toString());

            setValues({
                ...values,
                [ campo ]: dateFnsFormat(valor,  ( tipo === 'fecha' ? 'yyyy-MM-dd' : '' )).toString()
            });

        }else{

            setValues({
                ...values,
                [ campo ]: valor
            });

        }

    }

    const setFields = (target) => {

        setValues({
            ...values,
            ...target
        });

    }

    return [ values, handleInputChange, setFields, reset ];

}