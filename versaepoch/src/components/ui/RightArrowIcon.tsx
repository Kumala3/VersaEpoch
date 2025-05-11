import Image from 'next/image';

interface RightArrowIcon {
  width?: number;
  height?: number;
  className?: string;
}

export function RightArrowIcon({ width = 48, height = 48, className = '' }) {
  return (
    <Image
      width={width}
      height={height}
      src={'/right-arrow-icon.svg'}
      alt="Right Arrow Icon"
      className={className}
    />
  );
}
