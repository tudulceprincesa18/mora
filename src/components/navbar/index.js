import React from "react";

import navStyles from "../navbar/index.css";


function Navbar() {
  return(
    <div className={navStyles.contenedor}>
      <button className={navStyles.button}> Inicio </button>
      <button className={navStyles.button}> Sobre mi </button>
      <button className={navStyles.button}> Curricullum </button>
    </div>
  );
}

export default Navbar;