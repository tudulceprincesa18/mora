import React from "react";
import headerStyles from "../header/index.css";

function Header() {
    return(
      <div className={headerStyles.header}>
        <h1 className={headerStyles.h1}> Soy Yasmin Martins. </h1>
        <p className={headerStyles.p}> Soy una frontend developer en buenos aires, argentina. Soy capaz de crear componentes
          de react js ademas de saber usar diversas herramientas como typescript o chakra. </p>
      </div>
    );
  }
  
  export default Header;