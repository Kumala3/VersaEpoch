import styles from '@/styles/ctaButton.module.scss';

interface CTAButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function CTAButton({ title, onClick, className = "" }: CTAButtonProps) {
  console.log(`Classname received: ${className}`);
  
  return (
    <button onClick={onClick} className={`${styles.container} ${className}`}>
      {title}
    </button>
  );
}
