import Image from 'next/image';

interface CloseIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function CloseIcon({
  width = 48,
  height = 48,
  className = '',
}: CloseIconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/close-icon.svg'}
      alt="Close Icon"
      className={className}
    />
  );
}
