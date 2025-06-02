import styles from '@/styles/timelineFilterDropdownColumn.module.scss';

interface TimelineFilterDropdownElementProps {
  title: string;
  isChecked: boolean;
  onChange: () => void;
}

export function TimelineFilterDropdownElement({
  title,
  isChecked,
  onChange,
}: TimelineFilterDropdownElementProps) {

  return (
    <div className={styles.elementContainer}>
      <input
        type="checkbox"
        id={title}
        name={title}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={title} className={styles.elementContainer__label}>
        {title}
      </label>
    </div>
  );
}

interface TimelineFilterDropdownColumnProps {
  headline: string;
  elements: TimelineFilterDropdownElementProps[];
}

export function TimelineFilterDropdownColumn({
  headline,
  elements,
}: TimelineFilterDropdownColumnProps) {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>{headline}</p>
      <div className={styles.elementsContainer}>
        {elements.map((item, index) => (
          <TimelineFilterDropdownElement
            key={index}
            isChecked={item.isChecked}
            onChange={item.onChange}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
