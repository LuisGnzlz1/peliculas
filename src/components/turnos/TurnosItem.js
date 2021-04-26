import React from 'react';
import { MdModeEdit, MdDeleteForever, MdHttps } from "react-icons/md";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {actionTurnoDelete, actionTurnoEstado} from "../../actions/TurnosAction";
const TurnosItem = ({index, data, modoEdit}) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {

        Swal.fire({
            text: "¿Estás seguro que deseas borrarla?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#000',
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.value) {

                dispatch(actionTurnoDelete(id));

            }
        });

    }

    const handleEstado = (data) => {

        Swal.fire({
            text: "¿Estás seguro que cambiar a " + (data.estado === '1' ? 'Inactivo' : 'Activo') + " el turno?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#000',
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.value) {

                dispatch(actionTurnoEstado(data));

            }
        });

    }

    return (

      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.turno}</td>
        <td>
          {data.estado === "1" ?
              <span className="badge badge-success">Activo</span>
              :
              <span className="badge badge-danger">Inactivo</span>
          }
        </td>
        <td>
            <MdModeEdit size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={ () => modoEdit(data) }/>
            <MdHttps size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={ () => handleEstado(data) }/>
            <MdDeleteForever size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={ () => handleDelete(data.id) }/>
        </td>
      </tr>

  );
}

export default TurnosItem;
