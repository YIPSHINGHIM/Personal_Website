import type { ProjectData } from '@/content/portfolio';
import styles from './ProjectCard.module.css';
export function ProjectCard({ project }: { project: ProjectData }) {
  return <article className={styles.project} aria-labelledby={`${project.id}-heading`}>
    <div><span className="eyebrow">{project.category}</span><h3 id={`${project.id}-heading`}>{project.title}</h3><p>{project.summary}</p>
      <a className={styles.link} href={project.href} aria-label={`${project.linkLabel} — ${project.title}`} target="_blank" rel="noopener noreferrer">{project.linkLabel}<span aria-hidden="true"> ↗</span></a>
    </div>
    <dl className={styles.details}><dt>The brief</dt><dd>{project.brief}</dd><dt>My role</dt><dd>{project.contribution}</dd></dl>
  </article>;
}
