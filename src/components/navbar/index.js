import React from 'react';

import { Link, Route} from "wouter";
import navStyles from '../navbar/index.module.css';



function Navbar() {
  return(
    <div className={navStyles.contenedor}>
      <Link to="/inicio" className={ navStyles.button }> Inicio </Link>
      <Route path="/inicio"> </Route>
      <Link to="/sobre" className={ navStyles.button }> Sobre mi </Link>
      <Route path="/sobre"> </Route>
      <Link to="/cv" className={ navStyles.button }> Curricullum </Link>
      <Route path="/cv"> </Route>
    </div>
  );
}

export default Navbar;