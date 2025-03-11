'use client';

import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export default function CustomImage({ src, alt, width, height, className = '', fill = false }: CustomImageProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  const fullSrc = `${basePath}${src}`;

  if (fill) {
    return (
      <Image
        src={fullSrc}
        alt={alt}
        fill
        className={className}
      />
    );
  }

  return (
    <Image
      src={fullSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
} 