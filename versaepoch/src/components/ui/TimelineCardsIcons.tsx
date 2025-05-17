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

function ResearchIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/research-icon.svg'}
      alt={'Research Icon'}
      className={className}
    />
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
