import React from 'react';

import ContacStyles from './index.module.css';

const Contacto = () => {
    return (
        <div className={ContacStyles.container}>
            <div className={ContacStyles.formulario}>
            <h1 className={ContacStyles.h1}>Contacto</h1>
            <form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST" className={ContacStyles.form}>
                <input type="text" placeholder="Nombre" className={ContacStyles.input} required />
                <input type="email" placeholder="Correo electronico" className={ContacStyles.input} required />
                <input type="text" placeholder="Mensaje" className={ContacStyles.input} required />
                <button className={ContacStyles.button}>Enviar</button>
            </form>
            </div>
            <div className={ContacStyles.img}>
                <img src="https://i.pinimg.com/originals/5d/28/4d/5d284d7507d094ae95fccbb224d8d605.jpg" alt="imag"/>
            </div>
        </div>
    );
};

export default Contacto;