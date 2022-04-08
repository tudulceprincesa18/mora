import React from 'react';

import sectionStyles from '../section/index.module.css';


function Section() {
    return(
      <div className={ sectionStyles.container }> 
      <p classname={ sectionStyles.p }> Algunos de mis proyectos </p>
      </div>
    );
  }
  
  export default Section;