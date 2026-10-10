import { profile, contacts } from '@/content/portfolio';
import { PortraitFlip } from './PortraitFlip';
import styles from './Hero.module.css';
export function Hero() {
  return <section className={styles.hero} id="top" aria-labelledby="hero-heading">
    <div>
      <span className="eyebrow">Software engineer / Product builder</span>
      <h1 className={styles.heading} id="hero-heading">BUILDING <br />AT SCALE. <br />CREATING <br />WITH PURPOSE.</h1>
      <p className={styles.intro}>{profile.intro}</p>
      <div className="actions">
        <a className="primary-link" href="#work">Explore my work<span aria-hidden="true">↗</span></a>
        <a className="text-link" href="#contact">Let&apos;s connect<span aria-hidden="true">↗</span></a>
        <a className={styles.cv} href={contacts.resume} target="_blank" rel="noopener noreferrer">Download CV<span aria-hidden="true"> ↗</span></a>
      </div>
    </div>
    <PortraitFlip />
  </section>;
}
