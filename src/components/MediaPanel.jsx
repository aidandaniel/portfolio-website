import { useState } from 'react';

function MediaPanel({ src, alt, label, fallback, className = '' }) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className={`media-panel media-panel--placeholder ${className}`} role="img" aria-label={alt || label}>
        <span>{fallback || label || 'Image pending'}</span>
      </div>
    );
  }

  return (
    <div className={`media-panel ${className}`}>
      <img src={src} alt={alt || label} loading="lazy" onError={() => setHasError(true)} />
    </div>
  );
}

export default MediaPanel;
