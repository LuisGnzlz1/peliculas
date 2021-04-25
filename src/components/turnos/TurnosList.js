import React from 'react';
import TurnosItem from "./TurnosItem";

const TurnosList = ({turnos, modoEdit}) => {

  return (
    <>

        {turnos.length > 0 ?

            <>

              <div className="table-responsive">

                <table className="table table-hover">
                  <thead className="thead-black text-white">
                  <tr>
                    <th>Nº</th>
                    <th>Turno</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>

                  {
                    turnos.map((data, index) =>

                        <TurnosItem key={index} index={index} data={data} modoEdit={modoEdit}/>

                    )

                  }

                  </tbody>
                </table>

              </div>


            </>

            :

            <>

                <div className="alert alert-warning" role="alert">
                   No existen datos en turnos.
                </div>

            </>

        }

    </>

  );

}

export default TurnosList;
