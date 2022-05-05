import React from 'react';

import CvStyles from './index.module.css';


const Cv = () => {
    return (
        <div className={CvStyles.container} id="cv">
            <h1> Mi Curricullum </h1>
            <button className={CvStyles.button}><a href="https://www.linkedin.com/feed/update/urn:li:activity:6920453701321011200/" download="cv ingles.pdf">Ingles</a></button>
            <button className={CvStyles.button}><a href="https://www.linkedin.com/feed/update/urn:li:activity:6920453779221794816/" download="cv español.pdf">Español</a></button>
        </div>
    );
};

export default Cv;