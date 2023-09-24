import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeInFadeOut.css'; // Importa tu archivo CSS con las animaciones

function FadeInFadeOut() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleShow}>Toggle</button>
      <CSSTransition
        in={show}
        timeout={300} // Duración de la animación en milisegundos
        classNames="fade" // Nombre de la clase CSS
        unmountOnExit
      >
        <div className="fade">Este elemento aparecerá/desaparecerá con una animación.</div>
      </CSSTransition>
    </div>
  );
}

export default FadeInFadeOut;
