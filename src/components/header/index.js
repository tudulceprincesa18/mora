import { React, useEffect } from 'react';
import { gsap } from 'gsap';


import headerStyles from '../header/index.module.css';
import img from '../../img/compu.svg';

function Header() {
  useEffect( () =>{
    const Titulo = document.querySelector('#titulo');
    const Texto = document.querySelector('#texto');
    const Imagen = document.querySelector('#imagen');
    gsap.from(Titulo, { opacity:0, y:100, duration: 1 });
    gsap.from(Texto, { opacity:0, y: -100, duration:1 });
    gsap.from(Imagen, { stagger:0.3 ,opacity: 0, x: 100, duration:1 });
  },[])
    return(
      <div className={ headerStyles.container }>
        <div className={ headerStyles.header }>
        <h1 className={ headerStyles.h1 } id="titulo"> Soy Yasmin Martins. </h1>
        <h2 className={ headerStyles.h2 } id="texto"> Frontend developer de buenos aires, argentina. </h2>
          </div>
          <div className={ headerStyles.img } id="imagen">
            <img alt='imgsvg' src={img}/>
          </div>
      </div>
    );
  }
  
  export default Header;