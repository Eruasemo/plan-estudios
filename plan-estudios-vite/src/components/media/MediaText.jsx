import React from 'react';

export default function MediaText({ text, title = 'Texto' }) {
  const content = text && String(text).trim();
  if (!content) return null;

  return (
    <div className="media media-text">
      {title && <h3 className="media-title">{title}</h3>}
      <p>{content}</p>
    </div>
  );
}
