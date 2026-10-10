import styles from './PortraitFlip.module.css';
export function PortraitFlip() {
  return <button className={styles.tile} type="button" aria-label="Reveal photo of Shing Him Yip" aria-pressed="false">
    <span className={styles.monogram}>SH<br />Y.</span><span className={styles.caption}>IDEAS → REALITY</span>
    <span className={styles.hint}>CLICK TO MEET ME ↗</span>
  </button>;
}
