import Image from 'next/image';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
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

function ResearchIcon({
  width = 48,
  height = 48,
  className = '',
  color = '#fff',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function ProductIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/product-icon.svg'}
      alt={'Product Icon'}
      className={className}
    />
  );
}

function AnnouncementIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/announcement-icon.svg'}
      alt={'Announcement Icon'}
      className={className}
    />
  );
}

function CompanyIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/company-icon.svg'}
      alt={'Company Icon'}
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

export {
  MilestoneIcon,
  AnnouncementIcon,
  FeatureIcon,
  UpdateIcon,
  ModelIcon,
  CompanyIcon,
  ResearchIcon,
  ProductIcon,
};
