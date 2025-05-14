import Link from "next/link";
import styles from "@/styles/sourceElem.module.scss";

interface SourceElemProps{
    title: string;
    url: string;
}

export function SourceElem({title, url}: SourceElemProps) {
    return (
        <Link href={url} className={styles.container}>
            {title}
        </Link>
    )
}
