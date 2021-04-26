import React from 'react';
import {MdMenu} from "react-icons/md";

const Header = ({actionChecked}) => {

  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <span className="sidebar-toggle mr-3"><MdMenu size="2rem" onClick={ () => actionChecked() }/></span>
        <span className="navbar-brand">&nbsp;Movie Dashboard</span>

        <div className="navbar-collapse collapse d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                <img src="https://i.pravatar.cc/150?img=8" width="40" height="40" className="rounded-circle" alt="avatar"/>
                  &nbsp;&nbsp;Luis Gonzalez</span>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Header;
