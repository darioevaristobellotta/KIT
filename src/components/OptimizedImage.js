'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * OptimizedImage Component
 * Ultra-lightweight, zero-CLS image wrapper for Next.js App Router.
 * - Prevents Cumulative Layout Shift (CLS = 0) via reserved container aspect-ratio
 * - Smooth CSS fade-in transition upon load completion
 * - Priority loading flag for Hero / LCP images
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style = {},
  aspectRatio,
  objectFit = 'cover',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    aspectRatio: aspectRatio || (width && height ? `${width} / ${height}` : 'auto'),
    backgroundColor: 'var(--color-grey)',
    borderRadius: 'var(--radius-md)',
    ...style,
  };

  const imageStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 300ms cubic-bezier(0.3, 0, 0, 1)',
    objectFit: objectFit,
    width: '100%',
    height: '100%',
  };

  return (
    <div className={`optimized-image-wrapper ${className}`} style={containerStyle}>
      <Image
        src={src}
        alt={alt || ''}
        width={width || 800}
        height={height || 600}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        style={imageStyle}
        {...props}
      />
    </div>
  );
}
