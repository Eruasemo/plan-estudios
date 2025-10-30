import React from 'react';
import { getYouTubeId } from '../../lib/youtube';

export default function MediaVideo({ url, title = 'Video' }) {
  const id = getYouTubeId(url);
  if (!id) return null;

  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="media media-video">
      <div className="media-aspect">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {title && <div className="media-caption">{title}</div>}
    </div>
  );
}
