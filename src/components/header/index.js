import React from 'react';


import headerStyles from '../header/index.module.css';

function Header() {
    return(
      <div className={ headerStyles.header } id="header">
        <h1 className={ headerStyles.h1 }> Soy Yasmin Martins. </h1>
        <h2 className={ headerStyles.h2 }> Soy una frontend developer en buenos aires, argentina. 
          Esta pagina tiene la finalidad de presentar algunos de mis proyectos ademas de mis habilidades. </h2>
      </div>
    );
  }
  
  export default Header;