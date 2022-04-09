import React from 'react';
import Card from '../card';

import sectionStyles from '../section/index.module.css';


function Section() {
    return(
      <div className={ sectionStyles.container }> 
      <p classname={ sectionStyles.p }> Algunos de mis proyectos </p>
      <Card/> 
      <Card/>
      <Card/>
      </div>
    );
  }
  
  export default Section;