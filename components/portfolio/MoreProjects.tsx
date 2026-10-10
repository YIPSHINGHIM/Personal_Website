import type { ArchivedProject } from '@/content/portfolio';
import styles from './MoreProjects.module.css';
export function MoreProjects({ projects }: { projects: readonly ArchivedProject[] }) {
  if (!projects.length) return null;
  return <details className={styles.disclosure}><summary>More projects</summary>
    <ul className={styles.list}>{projects.map(project => <li key={project.href}>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View source — ${project.title}`}>View source<span aria-hidden="true"> ↗</span></a>
    </li>)}</ul>
  </details>;
}
