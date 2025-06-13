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

function ChevronDownIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/chevron-down.svg'}
      alt="Chevron Down Icon"
      className={className}
    />
  );
}

function ChevronUpIcon({ width = 48, height = 48, className }: IconProps) {
  return (
    <Image
      width={width}
      height={height}
      src={'/chevron-up.svg'}
      alt="Chevron Up Icon"
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
      alt="Collapse Icon"
      className={className}
    />
  );
}

function ArrowUpIcon({
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
      strokeLinejoin="round">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function ArrowDownIcon({
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
      strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function SortTableIcon({
  width = 48,
  height = 48,
  className = '',
  color = '#000',
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
      strokeLinejoin="round">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
}

function FilterTableIcon({
  width = 48,
  height = 48,
  className = '',
  color = '#000',
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
      strokeLinejoin="round">
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </svg>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
      <circle cx="12" cy="8" r="2" />
      <rect width="16" height="16" x="6" y="2" rx="2" />
    </svg>
  );
}

function BestForCodingIcon({
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
      strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

function BestForProductivityIcon({
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
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BestForWritingIcon({
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
      strokeLinejoin="round">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </svg>
  );
}

function BestForResearchAnalysisIcon({
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
      strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function BestForBrainstormingIcon({
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
      strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function BestForLifestyleIcon({
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
      strokeLinejoin="round">
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </svg>
  );
}

function BestForCookingIcon({
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
      strokeLinejoin="round">
      <path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
      <path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
      <path d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" />
      <path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
      <path d="M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" />
    </svg>
  );
}

function BestForGeneralKnowledgeIcon({
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
      strokeLinejoin="round">
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

function BestForOrganizingIcon({
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
      strokeLinejoin="round">
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </svg>
  );
}

function BestForImageGenerationIcon({
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
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function PlusIcon({
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
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function CrossIcon({
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
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CircleCheckIcon({
  width = 48,
  height = 48,
  color = '#000',
  className = '',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill='none'
      className={className}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
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
  ChevronDownIcon,
  ChevronUpIcon,
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
  BestForCodingIcon,
  BestForProductivityIcon,
  BestForWritingIcon,
  BestForResearchAnalysisIcon,
  BestForBrainstormingIcon,
  BestForLifestyleIcon,
  BestForCookingIcon,
  BestForGeneralKnowledgeIcon,
  BestForOrganizingIcon,
  BestForImageGenerationIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  SortTableIcon,
  FilterTableIcon,
  PlusIcon,
  CrossIcon,
  CircleCheckIcon,
};
