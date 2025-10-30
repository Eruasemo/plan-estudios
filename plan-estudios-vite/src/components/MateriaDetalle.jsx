import React from 'react';
import './MateriaDetalle.css';
import MediaRenderer from './MediaRenderer';

function MateriaDetalle({ materia, onVolver }) {
  // Mantiene la consistencia de colores según el tipo que ya usabas
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
        {/* Bloque de información básica (opcional). 
            Si no manejas más campos, este bloque se mantiene simple. */}
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Tipo:</span>
            <span className="info-value">{materia.tipo || 'N/A'}</span>
          </div>

          {/* Si en el futuro agregas más metadatos (créditos, profesor, etc.),
              puedes duplicar un info-item y mostrarlo aquí. */}
          {materia.descripcion && (
            <div className="info-item info-span">
              <span className="info-label">Descripción:</span>
              <span className="info-value">{materia.descripcion}</span>
            </div>
          )}
        </div>

        {/* Sección de medios: ahora incrusta según tipo (video/imagen/texto)
           Si no hay media, se muestra el placeholder original */}
        {Array.isArray(materia.media) && materia.media.length > 0 ? (
          <div className="media-grid">
            {materia.media.map((m, i) => (
              <MediaRenderer key={`${materia.nombre}-media-${i}`} item={m} />
            ))}
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
