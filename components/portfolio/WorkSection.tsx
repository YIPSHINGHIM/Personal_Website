import { profile, workHighlights, career } from '@/content/portfolio';
import { WorkHighlight } from './WorkHighlight';
import { CareerTimeline } from './CareerTimeline';
import styles from './WorkSection.module.css';
export function WorkSection() {
  return <section className="section" id="work" aria-labelledby="work-heading">
    <div className={styles.heading}><div><span className="eyebrow">Professional work</span><h2 id="work-heading">What I build at work.</h2></div>
      <div className={styles.role}><span>{profile.role}</span><span>{profile.employer} · Full-time · {profile.currentDates}</span></div>
    </div>
    <div className={styles.grid}>{workHighlights.map(highlight => <WorkHighlight key={highlight.id} highlight={highlight} />)}</div>
    <CareerTimeline entries={career} />
  </section>;
}
