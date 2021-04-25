import React from 'react';
import PeliculasItem from "./PeliculasItem";

const PeliculasList = ({peliculas, openModal}) => {

  return (
    <>

        {peliculas.length > 0 ?

            <>

              <div className="table-responsive">

                <table className="table table-hover">
                  <thead className="thead-black text-white">
                  <tr>
                    <th>Nº</th>
                    <th>Nombre</th>
                    <th>Fecha Publicación</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>

                  {
                    peliculas.map((data, index, key) =>

                        <PeliculasItem key={index} index={index} data={data} openModal={openModal}/>

                    )

                  }

                  </tbody>
                </table>

              </div>


            </>

            :

            <>

                <div className="alert alert-warning" role="alert">
                   No existen datos de peliculas.
                </div>

            </>

        }

    </>

  );

}

export default PeliculasList;
