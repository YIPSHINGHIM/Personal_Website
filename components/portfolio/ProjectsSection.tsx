import { featuredProjects, archivedProjects } from '@/content/portfolio';
import { ProjectCard } from './ProjectCard';
import { MoreProjects } from './MoreProjects';
import styles from './ProjectsSection.module.css';
export function ProjectsSection() {
  return <section className="section" id="projects" aria-labelledby="projects-heading">
    <span className="eyebrow">Independent products &amp; freelance work</span><h2 id="projects-heading">Built outside the day job.</h2>
    <div className={styles.projects}>{featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    <MoreProjects projects={archivedProjects} />
  </section>;
}
