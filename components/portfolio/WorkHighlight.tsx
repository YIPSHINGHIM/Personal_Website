import type { WorkHighlightData } from '@/content/portfolio';
import styles from './WorkHighlight.module.css';
export function WorkHighlight({ highlight }: { highlight: WorkHighlightData }) {
  return <article className={styles.card}>
    <span className={styles.label}>{highlight.id.replace('-', ' ')}</span>
    <h3>{highlight.title}</h3><p>{highlight.description}</p>
    <div className={styles.tags}>{highlight.tags.join(' / ')}</div>
  </article>;
}
