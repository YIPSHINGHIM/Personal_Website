import { SiteHeader } from '@/components/portfolio/SiteHeader';
import { Hero } from '@/components/portfolio/Hero';
import { WorkSection } from '@/components/portfolio/WorkSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { SiteFooter } from '@/components/portfolio/SiteFooter';

export default function HomePage() {
  return <div className="site-shell"><SiteHeader /><main id="main" tabIndex={-1}>
    <Hero /><WorkSection /><ProjectsSection /><AboutSection /><ContactSection />
  </main><SiteFooter year={new Date().getFullYear()} /></div>;
}
