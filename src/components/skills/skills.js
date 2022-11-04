import React from 'react';

import sectionStyles from '../skills/index.module.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiMaterialdesign, SiChakraui, SiTypescript, SiTestinglibrary } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className={ sectionStyles.cont }>
          <div>
          <h1 className={ sectionStyles.h1 }> Skills </h1>
          </div>
          <div className={ sectionStyles.section} > 
            <div className={sectionStyles.one}> Html5 <AiFillHtml5/></div>
            <div className={sectionStyles.two}> Css3 <DiCss3/> </div>
            <div className={sectionStyles.three}> Javascript <SiJavascript/> </div>

            <div className={sectionStyles.four}> React js <SiReact/></div>
            <div className={sectionStyles.five}> Material ui <SiMaterialdesign/></div>
            <div className={sectionStyles.six}> Chakra <SiChakraui/></div>

            <div className={sectionStyles.seven}> Typescript <SiTypescript/> </div>
            <div className={sectionStyles.eigth}> Git-Gitflow <FaGithub/></div>
            <div className={sectionStyles.nine}> Testing <SiTestinglibrary/></div>
            </div>
        </div>
    );
};

export default Skills;