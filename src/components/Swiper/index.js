import React from 'react';

import Swipers from '../skills/swiper';
import sectionStyles from './index.module.css'

const Swipper = () => {
    return (
        <div className={ sectionStyles.section }>
            <h1 className={ sectionStyles.h1 }> Mis habilidades </h1>
            <Swipers />
        </div>
    );
};

export default Swipper;