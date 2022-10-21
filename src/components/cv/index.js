import React from 'react';

import CvStyles from './index.module.css';


const Cv = () => {
    return (
        <div className={CvStyles.container} id="cv">
            <h1> Descargar mi curricullum </h1>
            <button className={CvStyles.button}> <a href="../../cv/ingles.pdf" download target="ingles.pdf" rel="noreferrer"> Cv ingles </a></button>
            <button className={CvStyles.button}> <a href="../../cv/español.pdf" download target="_blank" rel="noreferrer"> Cv español </a></button>
        </div>
    );
};

export default Cv;