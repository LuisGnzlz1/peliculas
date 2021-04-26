import React from 'react';
import {MdClose} from "react-icons/md";

const TurnosItemHorario = ({data, btnDeleteTurno}) => {

    return (

        <li className="list-group-item">{data.turno}

            <div className="pull-right">
                <MdClose size="1.5rem" style={{color: 'red', cursor: 'pointer'}} onClick={ () => btnDeleteTurno(data.id) }/>
            </div>

        </li>

  );
}

export default TurnosItemHorario;
