import React from 'react';

import sectionStyles from '../header/index.module.css';

const Skills = () => {
    return (
        <div className={ sectionStyles.cont }>
          <div className={sectionStyles.titulo}>
          <h1 className={ sectionStyles.h1 }> Skills </h1>
          </div>
          <div className={ sectionStyles.section} > 
            <div className={sectionStyles.one}> Html5 </div>
            <div className={sectionStyles.two}> Css3 </div>
            <div className={sectionStyles.three}> Javascript </div>

            <div className={sectionStyles.four}> React js </div>
            <div className={sectionStyles.five}> Material ui</div>
            <div className={sectionStyles.six}> Chakra </div>

            <div className={sectionStyles.seven}> Typescript </div>
            <div className={sectionStyles.eigth}> Git-Gitflow </div>
            <div className={sectionStyles.nine}> Testing </div>
            </div>
        </div>
    );
};

export default Skills;