import styles from "@/styles/ctaButton.module.scss";

interface CTAButtonProps {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function CTAButton({title, onClick}: CTAButtonProps) {
    return (
        <button onClick={onClick} className={styles.container}>
            {title}
        </button>
    )
}
