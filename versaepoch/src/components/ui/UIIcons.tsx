import Image from 'next/image';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

function NextIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/next-icon.svg'}
      alt="Next Icon"
      className={className}
    />
  );
}

function PreviousIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/previous-icon.svg'}
      alt="Previous Icon"
      className={className}
    />
  );
}

function FilterIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/filter-icon.svg'}
      alt="Filter Icon"
      className={className}
    />
  );
}

function ArrowDownIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/chevron-down.svg'}
      alt="Sort Icon"
      className={className}
    />
  );
}

function ArrowUpIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/chevron-up.svg'}
      alt="Sort Icon"
      className={className}
    />
  );
}

function ExpandIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      src={'/expand-icon.svg'}
      width={width}
      height={height}
      alt="Expand Icon"
      className={className}
    />
  );
}

function CollapseIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      src={'/collapse-icon.svg'}
      width={width}
      height={height}
      alt="Expand Icon"
      className={className}
    />
  );
}

function GoToBeginningIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/go-to-beginning-icon.svg'}
      alt="Go To Beginning Icon"
      className={className}
    />
  );
}

function GoToEndIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/go-to-the-end-icon.svg'}
      alt="Go To End Icon"
      className={className}
    />
  );
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

export {
  GlobalIcon,
  NextIcon,
  PreviousIcon,
  GoToEndIcon,
  GoToBeginningIcon,
  FilterIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ExpandIcon,
  CollapseIcon,
};
