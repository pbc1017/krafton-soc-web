'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  objectPosition?: string;
  borderRadius?: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
  fullWidth?: boolean;
  maxWidth?: string;
  height?: any;
  width?: any;
  withContainer?: boolean;
  containerStyle?: React.CSSProperties;
  fallbackSrc?: string;
  fallbackColor?: string;
}

const ImageWrapper = styled.div<{
  aspectRatio?: string;
  borderRadius?: string;
  fullWidth?: boolean;
  maxWidth?: string;
  withMargin?: boolean;
  fallbackColor?: string;
}>`
  position: relative;
  overflow: hidden;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  margin: ${({ withMargin }) => (withMargin ? '0 auto' : '0')};
  background-color: ${({ fallbackColor }) => fallbackColor || '#f5f5f5'};
`;

const StyledImage = styled(NextImage)<{
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  objectPosition?: string;
}>`
  object-fit: ${({ objectFit = 'cover' }) => objectFit};
  object-position: ${({ objectPosition = 'center' }) => objectPosition};
`;

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 14px;
`;

export const Image = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius,
  className,
  onClick,
  priority = false,
  fullWidth = false,
  maxWidth,
  withContainer = true,
  containerStyle,
  fallbackSrc,
  fallbackColor,
  ...rest
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src as string);
  const [isError, setIsError] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && !isError) {
      setImgSrc(fallbackSrc);
      setIsError(true);
    } else {
      setIsError(true);
    }
  };

  // 컨테이너 없이 직접 이미지를 렌더링
  if (!withContainer) {
    return isError && !fallbackSrc ? (
      <FallbackContainer>{alt}</FallbackContainer>
    ) : (
      <StyledImage
        src={imgSrc}
        alt={alt}
        fill={!(width && height)}
        width={width}
        height={height}
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority={priority}
        className={className}
        onClick={onClick}
        onError={handleError}
        {...rest}
      />
    );
  }

  // 컨테이너와 함께 이미지 렌더링
  return (
    <ImageWrapper
      aspectRatio={aspectRatio}
      borderRadius={borderRadius}
      className={className}
      onClick={onClick}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      withMargin={!!maxWidth}
      style={containerStyle}
      fallbackColor={fallbackColor}
    >
      {isError && !fallbackSrc ? (
        <FallbackContainer>{alt}</FallbackContainer>
      ) : (
        <StyledImage
          src={imgSrc}
          alt={alt}
          fill={!(width && height)}
          width={width}
          height={height}
          objectFit={objectFit}
          objectPosition={objectPosition}
          priority={priority}
          onError={handleError}
          {...rest}
        />
      )}
    </ImageWrapper>
  );
};

export default Image;
