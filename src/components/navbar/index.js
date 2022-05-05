import React, { useRef } from 'react';


import navStyles from '../navbar/index.module.css';

const Navbar = () => {
  const contactoRef = useRef(null)
  const curriculumRef = useRef(null)

  const handleCurriculum= () => {
       curriculumRef.current.scrollIntoView()
  }
  const handleContacto = () => {
       contactoRef.current.scrollIntoView()
  }
    return (
      <div className={ navStyles.contenedor }>
           <navbar>
             <button className={ navStyles.button } onClick={handleCurriculum}>Curriculum</button>
             <button className={ navStyles.button } onClick={handleContacto}>Contacto</button>
           </navbar>
           
          <div className={ navStyles.button } ref={curriculumRef}></div>
          <div className={ navStyles.button } ref={contactoRef}></div>
      </div>
    );
  };

export default Navbar;