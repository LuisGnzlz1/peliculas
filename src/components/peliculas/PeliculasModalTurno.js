import React, {useState} from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import {Modal, ModalBody} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {actionAddHorario, actionDeleteHorario} from "../../actions/PeliculasAction";
import TurnosListHorario from "../turnos/TurnosListHorario";
import Swal from "sweetalert2";

const PeliculasModalTurno = ({show, close, data}) => {

    const dispatch = useDispatch();
    const { turnos, peliculas } = useSelector( state => state );

    const idPelicula = data.id;
    let dataPelicula = peliculas.find(p => (p.id === idPelicula));

    const [horarioSeleccionado, setHorarioSeleccionado] = useState('');

    const turnosDiponibles = () => {

        if(dataPelicula){
            return turnos.filter(t => (t.estado === '1' && !dataPelicula.turnos.some(tu => tu.turno === t.turno) ));
        }else{
            return [];
        }

    }

    const btnAddTurno = () => {

        let dataTurno = turnos.find(p => (p.id === horarioSeleccionado));

        dispatch(actionAddHorario( {id: idPelicula, valor: dataTurno} ));

        setHorarioSeleccionado('');

    }

    const btnDeleteTurno = (idTurno) => {

        Swal.fire({
            text: "¿Estás seguro que deseas borrarlo?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#000',
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.value) {

                dispatch(actionDeleteHorario({id: idPelicula, valor: idTurno}));

            }
        });

    }

    return (

        <div>

            <Modal size="md" scrollable={false} backdrop="static" keyboard={false} show={show} onHide={ (e) => close('turno') } centered={true}>

                <ModalHeader className="bertha-content-aviso" closeButton>
                    <h5 className="font-weight-bold">{'Agregar Turnos a Pelicula'}</h5>
                </ModalHeader>

                <ModalBody>

                    <div>

                        <form className="p-2">

                            <div className="form-group row">
                                <div className="col-8 col-sm-8 col-md-8">
                                    <select className="custom-select" value={horarioSeleccionado} onChange={ (e) => setHorarioSeleccionado(e.target.value)}>
                                        <option value="">Seleccione</option>
                                        {
                                            turnosDiponibles().map((p, index) => {
                                                return <option key={index} value={p.id} >{ p.turno }</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <label  className="col-4 col-sm-4 col-md-4">
                                    <button className="btn btn-success" onClick={ () => btnAddTurno() } disabled={!horarioSeleccionado}>Añadir</button>
                                </label>
                            </div>

                            <TurnosListHorario turnos={dataPelicula?.turnos ? dataPelicula.turnos : []} btnDeleteTurno={btnDeleteTurno}/>

                        </form>

                    </div>

                </ModalBody>

            </Modal>

        </div>

    );

};

export default PeliculasModalTurno;
