import React from 'react';
import { Link } from "react-scroll";


import navStyles from '../navbar/index.module.css';

function Navbar() {
  return(
    <div className={navStyles.contenedor}>
        <ul className="nav-items">
         <Link
            className={ navStyles.button }
            activeClass="active"
            to="cv"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
           > Curricullum </Link>
          <Link
            className={ navStyles.button }
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
           > Contacto </Link>
          </ul>
    </div>
  );
}

export default Navbar;