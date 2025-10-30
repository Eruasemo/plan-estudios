import React from 'react';

export default function MediaImage({ url, title = 'Imagen' }) {
  if (!url) return null;
  return (
    <figure className="media media-image">
      <img src={url} alt={title || 'Imagen'} loading="lazy" />
      {title && <figcaption className="media-caption">{title}</figcaption>}
    </figure>
  );
}
