import React from 'react';
import './styles/App.scss';
import PeliculasRouter from "./router/PeliculasRouter";
import {store} from "./store/store";
import {Provider} from "react-redux";

const PeliculasApp = () => {

  return (
    <>
        <Provider store={store}>
            <PeliculasRouter/>
        </Provider>
    </>
  );
}

export default PeliculasApp;
