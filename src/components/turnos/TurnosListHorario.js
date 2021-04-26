import React from 'react';
import TurnosItemHorario from "./TurnosItemHorario";

const TurnosListHorario = ({turnos, btnDeleteTurno}) => {

  return (
    <>

        {turnos.length > 0 ?

            <>

              <ul className="list-group">

                {
                  turnos.map((data, index) =>

                      <TurnosItemHorario key={index} index={index} data={data} btnDeleteTurno={btnDeleteTurno}/>

                  )

                }

              </ul>

            </>

            :

            <>

                <div className="alert alert-warning" role="alert">
                   No existen horarios para la pelicula.
                </div>

            </>

        }

    </>

  );

}

export default TurnosListHorario;
