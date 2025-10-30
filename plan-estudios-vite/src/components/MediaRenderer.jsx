import React from 'react';
import { MediaVideo, MediaImage, MediaText } from './media';

export default function MediaRenderer({ item }) {
  if (!item) return null;
  const tipo = (item.tipo || '').toLowerCase();
  const title = item.titulo || item.title;

  switch (tipo) {
    case 'video':
      return <MediaVideo url={item.url} title={title} />;

    case 'imagen':
    case 'image':
      return <MediaImage url={item.url} title={title} />;

    case 'texto':
    case 'text':
      // Se espera item.text (recomendado). Si mandan "url" por error, hacemos fallback.
      return <MediaText text={item.text ?? item.url} title={title} />;

    default:
      // Fallback actual (comportamiento anterior): si no hay tipo o es desconocido, renderiza link.
      if (item.url) {
        return (
          <a className="media media-link" href={item.url} target="_blank" rel="noopener noreferrer">
            {title || item.url}
          </a>
        );
      }
      return null;
  }
}
