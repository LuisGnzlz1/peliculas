import React from 'react';
import {MdMenu} from "react-icons/md";

const Header = ({actionChecked}) => {

  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <a className="sidebar-toggle mr-3" href="#"><MdMenu size="2rem" onClick={ () => actionChecked() }/></a>
        <a className="navbar-brand" href="https://bootadmin.net">&nbsp;Movie Dashboard</a>

        <div className="navbar-collapse collapse d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
                <img src="https://i.pravatar.cc/150?img=8" width="40" height="40" className="rounded-circle" alt="avatar"/>
                  &nbsp;&nbsp;Luis Gonzalez</a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Header;
