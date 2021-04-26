import React from 'react';
import { MdModeEdit, MdSchedule, MdDeleteForever } from "react-icons/md";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {actionDelete} from "../../actions/PeliculasAction";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

const PeliculasItem = ({index, data, openModal}) => {

    const dispatch = useDispatch();

    const handleEdit = (datos) => {
        openModal('form', 'edit', datos);
    }

    const handleTurno = (datos) => {
        openModal('turno', '', datos);
    }

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

                dispatch(actionDelete(id));

            }
        });

    }

    let fechaParse = dateFnsParse(data.fechapublicacion, "yyyy-MM-dd", new Date());

    return (

      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.nombre}</td>
        <td>{dateFnsFormat(fechaParse, 'dd/MM/yyyy').toString()}</td>
        <td>
          {data.estado === "1" ?
              <span className="badge badge-success">Activo</span>
              :
              <span className="badge badge-danger">Inactivo</span>
          }
        </td>
        <td>
          <MdModeEdit size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={ () => handleEdit(data) }/>
          <MdSchedule size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={() => handleTurno(data) }/>&nbsp;&nbsp;
          <MdDeleteForever size="2rem" style={{cursor: "pointer", marginRight: "0.8rem"}} onClick={ () => handleDelete(data.id) }/>

        </td>
      </tr>

  );
}

export default PeliculasItem;
