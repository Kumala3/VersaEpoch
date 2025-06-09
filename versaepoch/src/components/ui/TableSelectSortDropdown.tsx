import styles from '@/styles/ui/tableSelectDropdown.module.scss';

interface TableSelectDropdownProps {
  elements: { id: string; title: string }[];
  onSelect: (columnId: string) => void;
}

export function TableSelectDropdown({
  elements,
  onSelect,
}: TableSelectDropdownProps) {
  const handleOptionClick = (columnId: string) => {
    onSelect(columnId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>Add Sort</div>

      <div className={styles.optionsList}>
        {elements.map((element) => (
          <button
            key={element.id}
            className={styles.option}
            onClick={() => handleOptionClick(element.id)}>
            <span className={styles.option__label}>{element.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
