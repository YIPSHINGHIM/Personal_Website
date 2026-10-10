import { profile, education, skills } from '@/content/portfolio';
import styles from './AboutSection.module.css';
export function AboutSection() {
  return <section className={`section ${styles.about}`} id="about" aria-labelledby="about-heading">
    <div><span className="eyebrow">A little about me</span><h2 id="about-heading">Engineer by profession.<br />Builder by curiosity.</h2></div>
    <div>{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <ul className={styles.skills} aria-label="Technical skills">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <div className={styles.education}><h3>Education</h3><ul>{education.map(entry => <li key={entry.institution}>
        <span>{entry.institution}</span><p>{entry.degree} · {entry.dates}<br />{entry.result}</p>
      </li>)}</ul></div>
    </div>
  </section>;
}
