import React from 'react';
import './MateriaDetalle.css';

function MateriaDetalle({ materia, onVolver }) {
  // Usamos la misma lógica de clases para mantener la consistencia de colores
  const tipoClase = `tipo-${materia.tipo || 'default'}`;

  return (
    <div className="detalle-container">
      <button onClick={onVolver} className="back-button">
        &larr; Volver a la retícula
      </button>

      <div className={`detalle-header ${tipoClase}`}>
        <h2>{materia.nombre}</h2>
      </div>

      <div className="detalle-content">
        <h3>Contenido de la Materia</h3>
        <p>Aquí se mostrará el contenido multimedia como videos, imágenes y enlaces relacionados con la materia.</p>
        
        {/* Renderizamos la lista de media si existe en el JSON */}
        {materia.media && materia.media.length > 0 ? (
          <div className="media-section">
            <h4>Recursos Disponibles:</h4>
            <ul>
              {materia.media.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.titulo} ({item.tipo})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Placeholder por si no hay contenido */
          <div className="media-placeholder">
            <p>Aún no hay contenido disponible para esta materia.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MateriaDetalle;

