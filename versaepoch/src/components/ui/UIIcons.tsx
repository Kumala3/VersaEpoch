import Image from 'next/image';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
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

function ChatgptIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/chatgpt-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function ClaudeIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/claude-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function GeminiIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/gemini-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function DeepseekIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/deepseek-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function XaiIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/grok-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function MistralIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/mistral-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function MetaIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/meta-icon.svg'}
      alt="OpenAI Icon"
      className={className}
    />
  );
}

function ModalityTextIcon({
  width = 48,
  height = 48,
  className,
  color = '#fff',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}>
      <path d="M15 12h6" />
      <path d="M15 6h6" />
      <path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
      <path d="M3 18h18" />
      <path d="M3.92 11h6.16" />
    </svg>
  );
}

function ModalityAudioIcon({
  width = 48,
  height = 48,
  className,
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  );
}

function ModalityVideoIcon({
  width = 48,
  height = 48,
  className,
  color = '#fff',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </svg>
  );
}

function ModalityImageIcon({
  width = 48,
  height = 48,
  className,
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
      <circle cx="12" cy="8" r="2" />
      <rect width="16" height="16" x="6" y="2" rx="2" />
    </svg>
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
  ChatgptIcon,
  ClaudeIcon,
  MistralIcon,
  MetaIcon,
  DeepseekIcon,
  XaiIcon,
  GeminiIcon,
  ModalityTextIcon,
  ModalityImageIcon,
  ModalityVideoIcon,
  ModalityAudioIcon,
};
