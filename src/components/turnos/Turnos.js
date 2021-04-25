import React, {useState} from 'react';
import {useForm} from "../../hooks/useForm";
import {useSelector} from "react-redux";
import TurnosList from "../turnos/TurnosList";
import TurnosForm from "./TurnosForm";

const Turnos = () => {

    const initTurno = {
        id: '',
        turno: '',
        estado: '2',
    }

    const [values, setValue, setFields] = useForm(initTurno);

    const { turnos } = useSelector( state => state );

    const [modo, setModo] = useState('list');

    const handleChange = (e, tipoCampo = '', nombreCampo = '') => {
        setValue(e, tipoCampo, nombreCampo);
    }

    const modoAdd = () => {
        setModo('add');
        setFields(initTurno);
    }

    const modoEdit = (data) => {
        setModo('edit');
        setFields(data);
    }

    const modoList = () => {
        setModo('list');
    }

    return (
        <>

            <div>

                {modo === 'list' ?

                    <>

                        <div className="row mb-4">

                            <div className="col-6">
                                <h2 className="">Turnos</h2>
                            </div>

                            <div className="col-6 d-flex justify-content-end">
                                <button className="btn btn-success" onClick={ () => modoAdd() }>Agregar</button>
                            </div>

                        </div>

                        <TurnosList turnos={turnos} modoEdit={modoEdit}/>

                    </>

                    :

                    <>

                        {modo === 'add' ?

                            <TurnosForm modo={modo} modoList={modoList} data={values} handleChange={handleChange}/>

                            :

                            <TurnosForm modo={modo} modoList={modoList} data={values} handleChange={handleChange}/>

                        }

                    </>

                }

            </div>

        </>

    );
}

export default Turnos;
