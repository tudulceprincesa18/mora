import React from 'react';


import headerStyles from '../header/index.module.css';

function Header() {
    return(
      <div className={ headerStyles.container }>
        <div className={ headerStyles.header }>
        <h1 className={ headerStyles.h1 }> Soy Yasmin Martins. </h1>
        <h2 className={ headerStyles.h2 }> Frontend developer de buenos aires, argentina. </h2>
          </div>
          <div className={ headerStyles.img }>
            <img alt='imgsvg' src='https://thenounproject.com/api/private/icons/4257346/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjZCENjByJ05U_7Y_CqlEjk7VsklnvUBdzGVqIQRIsoafXaackrxpYW6bwJmLOJpYQ3raTdhB-PEXDEi2LE4s6VOJ7jw%3D%3D'/>
          </div>
      </div>
    );
  }
  
  export default Header;