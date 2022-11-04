import React from 'react';

import sectionStyles from '../section/index.module.css';



function Section() {
    return(
      <div className={ sectionStyles.container } id="proyectos"> 
      <p classname={ sectionStyles.p }> Algunos de mis proyectos </p>
      <div className={ sectionStyles.buttons }>
      <button className={ sectionStyles.button1 }>
       <a href='https://entropica.netlify.app/'> Entropica </a>
      </button>
      <button className={ sectionStyles.button2 }>
       <a href='https://criptokitty.netlify.app/'> Cripto-monedas  </a>
      </button>
      </div>
      </div>
    );
  }
  
  export default Section;