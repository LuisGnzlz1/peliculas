import { useState } from 'react';
import dateFnsFormat from 'date-fns/format';

export const useForm = (initialState = {} ) => {
    
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

            setValues({
                ...values,
                [ campo ]: dateFnsFormat(valor,  ( tipo === 'fecha' ? 'yyyy-MM-dd' : 'HH:mm' ) ).toString()
            });

        }else if(tipo === 'check') {

            setValues({
                ...values,
                [ campo ]: valor.target.checked === true ? '1' : '2'
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