import type { CareerEntry } from '@/content/portfolio';
import styles from './CareerTimeline.module.css';
export function CareerTimeline({ entries }: { entries: readonly CareerEntry[] }) {
  if (!entries.length) return null;
  return <div className={styles.timeline}><span className={styles.label}>Previously</span>
    <ul className={styles.list}>{entries.map(entry => <li key={`${entry.company}-${entry.role}`}>
      <span className={styles.role}>{entry.role}</span>
      <span className={styles.detail}>{entry.company} · {entry.dates}</span>
    </li>)}</ul>
  </div>;
}
