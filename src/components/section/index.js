import React from 'react';

import sectionStyles from '../section/index.module.css';



function Section() {
    return(
      <div className={ sectionStyles.container }> 
      <p classname={ sectionStyles.p }> Algunos de mis proyectos </p>
      <button className={ sectionStyles.button }>
       <a href='https://entropica.netlify.app/'> Entropica </a>
      </button>
      <button className={ sectionStyles.button }>
       <a href='https://criptokitty.netlify.app/'> Cripto-monedas  </a>
      </button>
      </div>
    );
  }
  
  export default Section;