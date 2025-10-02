import React from 'react';
import Materia from './Materia';
import './Semestre.css';

// Recibimos la función onMateriaClick y la pasamos a cada componente Materia
function Semestre({ data, onMateriaClick }) {
  return (
    <div className="semestre-fila">
      <div className="semestre-etiqueta">
        <span>{data.semestre}</span>
      </div>
      <div className="materias-contenedor">
        {data.materias.map((materia, index) => (
          <Materia 
            key={index} 
            data={materia} 
            onClick={onMateriaClick} // La pasamos aquí
          />
        ))}
      </div>
    </div>
  );
}

export default Semestre;

