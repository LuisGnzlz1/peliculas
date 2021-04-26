import React, {useState} from 'react';
import PeliculasList from "./PeliculasList";
import {useSelector} from "react-redux";
import PeliculasModal from "./PeliculasModal";
import {useForm} from "../../hooks/useForm";
import PeliculasModalTurno from "./PeliculasModalTurno";

const Peliculas = () => {

    const initPelicula = {
        id: '',
        nombre: '',
        fechapublicacion: '',
        estado: '',
        turnos: []
    }

    const [values, setValue, setFields] = useForm(initPelicula);

    const { peliculas } = useSelector( state => state );

    const [showModal, setShowModal] = useState(false);
    const [showModalTurno, setShowModalTurno] = useState(false);

    const handleChange = (e, tipoCampo = '', nombreCampo = '') => {
        setValue(e, tipoCampo, nombreCampo);
    }

    const openModal = (tipoModal = 'form', tipoAction = 'add', data) => {

        if(tipoModal === 'form'){

            if(tipoAction === 'add'){
                setFields(initPelicula);
            }else{
                setFields(data);
            }

            setShowModal(true);

        }else if(tipoModal === 'turno'){

            setShowModalTurno(true);
            setFields(data);
        }


    }

    const closeModal = (tipoModal = 'form') => {

        if(tipoModal === 'form'){
            setShowModal(false);

        }else if(tipoModal === 'turno'){
            setShowModalTurno(false);
        }
    }

  return (
    <>

        <PeliculasModal show={showModal} close={closeModal} data={values} handleChange={handleChange}/>
        <PeliculasModalTurno show={showModalTurno} close={closeModal} data={values} handleChange={handleChange}/>

        <div className="row mb-4">

            <div className="col-6">
                <h2 className="">Peliculas</h2>
            </div>

            <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-success" onClick={ () => openModal() }>Agregar</button>
            </div>

        </div>

        <PeliculasList peliculas={peliculas} openModal={openModal}/>

    </>
  );
}

export default Peliculas;
