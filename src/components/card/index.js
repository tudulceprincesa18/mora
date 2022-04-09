import React from 'react';

import cardStyles from '../card/index.module.css';


function Card() {
    return(
      <div className={ cardStyles.container }> 
      <button className={ cardStyles.button }> ver </button>
      </div>
    );
  }
  
  export default Card;