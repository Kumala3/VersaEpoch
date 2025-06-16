import Image from 'next/image';
import Link from 'next/link';

interface SocialIconProps {
  width?: number;
  height?: number;
  className?: string;
  version?: 'dark' | 'white';
  link: string;
}

function GitHubIcon({
  width = 48,
  height = 48,
  className = '',
  version = 'dark',
  link,
}: SocialIconProps) {
  return (
    <Link href={link}>
      <Image
        width={width}
        height={height}
        className={className}
        src={
          version === 'dark'
            ? '/github-mark/github-mark.svg'
            : '/github-mark/github-mark-white.svg'
        }
        alt="GitHub Icon"
      />
    </Link>
  );
}

export { GitHubIcon };
