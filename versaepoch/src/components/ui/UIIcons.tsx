import Image from 'next/image';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

function GlobalIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/global-icon.svg'}
      alt="Global Icon"
      className={className}
    />
  );
}

export { GlobalIcon };
