import React from 'react';

import { Cont, H1, Section, One, Two, Three, Four, Five, Six, Seven, Eigth, Nine } from './skillStyles.js';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact, SiMaterialdesign, SiChakraui, SiTypescript, SiTestinglibrary } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <Cont>
          <div>
          <H1> Skills </H1>
          </div>
          <Section> 
            <One> Html5 <AiFillHtml5/></One>
            <Two> Css3 <DiCss3/> </Two>
            <Three> Javascript <SiJavascript/> </Three>

            <Four> React js <SiReact/></Four>
            <Five> Material ui <SiMaterialdesign/></Five>
            <Six> Chakra <SiChakraui/></Six>

            <Seven> Typescript <SiTypescript/> </Seven>
            <Eigth> Git-Gitflow <FaGithub/></Eigth>
            <Nine> Testing <SiTestinglibrary/></Nine>
            </Section>
        </Cont>
    );
};

export default Skills;