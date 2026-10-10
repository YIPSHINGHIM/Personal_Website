import { describe, it, expect } from 'vitest';
import { contacts, featuredProjects, profile, workHighlights, archivedProjects, education, career } from './portfolio';

describe('portfolio content contracts', () => {
  it('keeps working CV and featured product destinations with distinct roles', () => {
    expect(contacts.resume).toBe('/ShingHimYipCV.pdf');
    expect(featuredProjects.map(p => p.href)).toEqual(['https://ukpropertychecker.com/', 'https://www.mindfulcrafthandmades.com/']);
    expect(featuredProjects.map(p => p.category)).toEqual(['Independent SaaS', 'Freelance client website']);
    expect(new Set(featuredProjects.map(p => p.id)).size).toBe(2);
  });
  it('retains engineering experience, previous roles and both education records', () => {
    expect(profile.employer).toBe('Content Guru');
    expect(workHighlights).toHaveLength(3);
    expect(career.map(c => c.role)).toEqual(['Graduate Software Engineer', 'Full Stack Web Developer Intern', 'Event Support Crew']);
    expect(education).toHaveLength(2);
  });
  it('keeps all six previous project destinations accessible', () => {
    expect(archivedProjects.map(p => p.href)).toEqual([
      'https://github.com/YIPSHINGHIM/TodoList_using_React_and_Django',
      'https://github.com/YIPSHINGHIM/Team_project',
      'https://github.com/YIPSHINGHIM/Personal_Website',
      'https://github.com/YIPSHINGHIM/Stock-price-message-bot',
      'https://github.com/YIPSHINGHIM/upload_video_bot',
      'https://github.com/YIPSHINGHIM/VaR_Web_app',
    ]);
  });
});
