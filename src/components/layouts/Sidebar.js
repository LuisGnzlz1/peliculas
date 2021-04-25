import React from 'react';
import {MdAccessTime, MdHttps, MdMovie} from "react-icons/md";
import { NavLink } from 'react-router-dom'

const Sidebar = ({check}) => {

  return (
    <>
      <div className={"sidebar sidebar-dark bg-light " + (check ? 'toggled' : '')}>
        <ul className="list-unstyled">

          <li>
            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/peliculas"
            >
              <MdMovie size="2rem" />&nbsp;Peliculas
            </NavLink>
          </li>

          <li>
            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/turnos"
            >
              <MdAccessTime size="2rem" />&nbsp;Turnos
            </NavLink>
          </li>

          <li><a href="#">
            <MdHttps size="2rem" />&nbsp;Cerrar sesión</a>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Sidebar;
