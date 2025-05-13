import Image from 'next/image';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

function ModelIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/model-icon.svg'}
      alt={'Model Icon'}
      className={className}
    />
  );
}

function FeatureIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/feature-icon.svg'}
      alt={'Feature Icon'}
      className={className}
    />
  );
}

function UpdateIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/update-icon.svg'}
      alt={'Update Icon'}
      className={className}
    />
  );
}

function MilestoneIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/milestone-icon.svg'}
      alt={'Milestone Icon'}
      className={className}
    />
  );
}

function ToolIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/tool-icon.svg'}
      alt={'Tool Icon'}
      className={className}
    />
  );
}

export { MilestoneIcon, ToolIcon, FeatureIcon, UpdateIcon, ModelIcon };
