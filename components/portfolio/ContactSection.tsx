import { contacts } from '@/content/portfolio';
import styles from './ContactSection.module.css';
export function ContactSection() {
  return <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading">LET&apos;S CONNECT.</h2>
    <p>For professional connections, engineering opportunities, or selected freelance project enquiries, get in touch.</p>
    <div className="actions"><a className={styles.primary} href={contacts.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span aria-hidden="true"> ↗</span></a>
      <a className="text-link" href={contacts.github} target="_blank" rel="noopener noreferrer">Explore GitHub<span aria-hidden="true">↗</span></a>
    </div>
  </section>;
}
