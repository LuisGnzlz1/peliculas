import React, {useState} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import Turnos from "../components/turnos/Turnos";
import Peliculas from "../components/peliculas/Peliculas";

const PeliculasRouter = () => {

  const [check, setChecked] = useState(false);

  const actionChecked = () => setChecked(!check);

  return (

    <BrowserRouter>

      <Header actionChecked={actionChecked}/>

      <div className="d-flex">

        <Sidebar check={check}/>

        <div className="content p-4">

          <div className="container-fluid mt-2">
            <Switch>
              <Route exact path="/peliculas" component={ Peliculas } />
              <Route exact path="/turnos" component={ Turnos } />
              <Redirect to="/peliculas" />
            </Switch>
          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default PeliculasRouter;
