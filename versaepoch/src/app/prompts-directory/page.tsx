import styles from '@/styles/promptsDirectoryPage.module.scss';
import { UnderDevelopment } from '@/components/UnderDevelopment';
import { HexagonBackground } from "@/components/HexagonGridBG";

export default function PromptsDirectoryPage() {
  return (
    <div className={styles.container}>
      <HexagonBackground />
    </div>
  );
}
