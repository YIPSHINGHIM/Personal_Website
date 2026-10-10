import styles from './SiteHeader.module.css';
export function SiteHeader() {
  return <header className={styles.header}>
    <a className={styles.skip} href="#main">Skip to content</a>
    <a className={styles.brand} href="#top">SHING HIM YIP.</a>
    <nav aria-label="Main navigation" className={styles.nav}>
      <a href="#work">Experience</a><a href="#projects">Projects</a><a href="#about">About</a>
      <a href="#contact">Connect<span aria-hidden="true"> ↗</span></a>
    </nav>
  </header>;
}
