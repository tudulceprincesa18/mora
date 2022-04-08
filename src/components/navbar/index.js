import React from 'react';

import { Route} from "wouter";
import navStyles from '../navbar/index.module.css';


function Navbar() {
  return(
    <div className={navStyles.contenedor}>
      <a href="/inicio" className={ navStyles.button }> Inicio </a>
      <Route path="/inicio"> </Route>
      <a href="/sobre" className={ navStyles.button }> Sobre mi </a>
      <Route path="/sobre"> </Route>
      <a href="/cv" className={ navStyles.button }> Curricullum </a>
      <Route path="/cv"> </Route>
    </div>
  );
}

export default Navbar;