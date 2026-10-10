import { profile } from '@/content/portfolio';
import styles from './SiteFooter.module.css';
export function SiteFooter({ year }: { year: number }) {
  return <footer className={styles.footer}><span>© {year} {profile.name}</span><span>Software engineer. Independent builder.</span></footer>;
}
