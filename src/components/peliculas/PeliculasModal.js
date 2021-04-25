import React from 'react';
import ModalHeader from "react-bootstrap/ModalHeader";
import {Modal, ModalBody, ModalFooter} from "react-bootstrap";
import DatePicker  from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import dateFnsParse from 'date-fns/parse';
import {useDispatch} from "react-redux";
import {actionAdd, actionEdit} from "../../actions/PeliculasAction";

const PeliculasModal = ({show, close, data, handleChange}) => {

    const dispatch = useDispatch();

    const onSubmit = () => {

        if(data.id){
            dispatch(actionEdit(data));
        }else{
            dispatch(actionAdd(data));
        }

        close();

    }

    let isFillForm = !(data.nombre && data.fechapublicacion && data.estado);

    return (

        <div>

            <Modal size="md" scrollable={false} backdrop="static" keyboard={false} show={show} onHide={ (e) => close() } centered={true}>

                <ModalHeader className="bertha-content-aviso" closeButton>
                    <h5 className="font-weight-bold">{data?.id ? 'Editar' : 'Agregar' } Pelicula</h5>
                </ModalHeader>

                <ModalBody>

                    <div>

                        <form className="p-2">

                            <div className="form-group row">
                                <label  className="col-sm-4 col-form-label">Nombre Pelicula</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" placeholder="Ingrese nombre" value={data.nombre} onChange={ (e) => handleChange(e, 'text', 'nombre') }/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Fecha Publicación</label>
                                <div className="col-sm-8">


                                    <DatePicker
                                        selected={data.fechapublicacion ?  dateFnsParse(data.fechapublicacion, "yyyy-MM-dd", new Date()) : ''}
                                        onChange={(e) => handleChange(e, 'fecha', 'fechapublicacion')}
                                        showMonthDropdown
                                        showYearDropdown
                                        dateFormat="dd/MM/yyyy"
                                        scrollableYearDropdown
                                        locale={es}
                                        dropdownMode="select"
                                        className="form-control"
                                        name="fechapublicacion"
                                        placeholderText="dd/mm/aaaa"
                                        autoComplete="off"
                                    />

                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Estado</label>
                                <div className="col-sm-8">
                                    <select className="custom-select" value={data.estado} onChange={ (e) => handleChange(e, 'text', 'estado')}>
                                        <option value="">Seleccione</option>
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                    </select>
                                </div>
                            </div>

                        </form>

                    </div>

                </ModalBody>

                <ModalFooter className="d-flex justify-content-center">

                    <div className="form-group row text-center">
                        <div className="col-12">
                            <button type="button" className="btn btn-success" onClick={ () => onSubmit() } disabled={isFillForm}>Guardar</button>
                        </div>
                    </div>

                </ModalFooter>

            </Modal>

        </div>

    );

};

export default PeliculasModal;
