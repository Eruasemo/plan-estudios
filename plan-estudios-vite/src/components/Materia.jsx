import React from 'react';
import './Materia.css';

// Recibimos la función onClick como prop
function Materia({ data, onClick }) {
  const tipoClase = `tipo-${data.tipo || 'default'}`;

  // Al hacer clic, llamamos a la función que recibimos, pasándole nuestros propios datos
  return (
    <div
      className={`materia-card ${tipoClase}`}
      onClick={() => onClick(data)} 
    >
      {data.nombre}
    </div>
  );
}

export default Materia;

