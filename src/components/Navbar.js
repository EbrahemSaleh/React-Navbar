import React, {useState } from 'react';
import * as Faicon from 'react-icons/fa';
import * as Closeicon from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
        <div className="navbar" >
          <Link to="#" className="menu-bars" >
            <Faicon.FaBars onClick={showSidebar} />
          </Link>
        </div> 
        <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="#" className="menu-bars" >
                <Closeicon.AiOutlineClose />
              </Link>
            </li>
          </ul>

        </nav>
      </>
    )
  }



export default Navbar;