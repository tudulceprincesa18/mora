import React from 'react';


import headerStyles from '../header/index.module.css';
import img from '../../img/compu.svg';

function Header() {
    return(
      <div className={ headerStyles.container }>
        <div className={ headerStyles.header }>
        <h1 className={ headerStyles.h1 }> Soy Yasmin Martins. </h1>
        <h2 className={ headerStyles.h2 }> Frontend developer de buenos aires, argentina. </h2>
          </div>
          <div className={ headerStyles.img }>
            <img alt='imgsvg' src={img}/>
          </div>
      </div>
    );
  }
  
  export default Header;