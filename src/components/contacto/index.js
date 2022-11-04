import React from 'react';

import ContacStyles from './index.module.css';

const Contacto = () => {
    return (
        <div className={ContacStyles.container} id="contacto">
            <div className={ContacStyles.formulario}>
            <h1 className={ContacStyles.h1}>Contacto</h1>
            <form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST" className={ContacStyles.form}>
                <input type="text" placeholder="Nombre" className={ContacStyles.input} required />
                <input type="email" placeholder="Correo electronico" className={ContacStyles.input} required />
                <input type="text" placeholder="Mensaje" className={ContacStyles.input} required />
                <button className={ContacStyles.button}>Enviar</button>
            </form>
            </div>
            <div className={ContacStyles.image}>
                <img alt="imagen" src='https://us.123rf.com/450wm/martialred/martialred1703/martialred170300026/74131554-sobre-de-mensaje-o-sobre-de-carta-de-carta-delgada-icono-de-vector-de-arte-para-aplicaciones-y-sitio.jpg?ver=6'/>
            </div>
        </div>
    );
};

export default Contacto;