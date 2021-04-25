import React from 'react';
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import dateFnsParse from 'date-fns/parse';
import {useDispatch} from "react-redux";
import {actionTurnoAdd, actionTurnoEdit} from "../../actions/TurnosAction";

const TurnosForm = ({modo, modoList, data, handleChange}) => {

    const dispatch = useDispatch();

    const onSubmitTurno = () => {

        if(data.id){
            dispatch(actionTurnoEdit(data));
        }else{
            dispatch(actionTurnoAdd(data));
        }

        modoList();

    }

    let isFillForm = !(data.turno);

    return (
        <>

            <div className="row mb-4">

                <div className="col-12">
                    <h2 className="">{modo === 'add' ? 'Agregar' : 'Editar'} Turno</h2>
                </div>

                <form className="p-2 mt-4">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Turno</label>
                        <div className="col-sm-8">

                            <DatePicker
                                selected={data.turno ?  dateFnsParse(data.turno, "HH:mm", new Date()) : ''}
                                onChange={(e) => handleChange(e, 'hora', 'turno')}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                timeCaption="Hora"
                                dateFormat="HH:mm"
                                className="form-control"
                                name="turno"
                                placeholderText="hh/mm"
                                autoComplete="off"
                            />

                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Activo</label>
                        <div className="col-sm-8">

                            <input type="checkbox" defaultChecked={data.estado === '1' ? true : false} onChange={ (e) => handleChange(e, 'check', 'estado')} />

                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-12 text-center mt-4">
                            <button type="button" className="btn btn-success" style={{marginRight: '1rem'}} onClick={() => onSubmitTurno() } disabled={isFillForm}>Guardar</button>
                            <button type="button" className="btn btn-danger" onClick={ () => modoList() }>Volver</button>
                        </div>
                    </div>

                </form>


            </div>

        </>

    );
}

export default TurnosForm;
