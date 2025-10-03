import { describe, it, expect } from 'vitest';
import { projects } from './data';

describe('Project Data Structure', () => {
  it('should have at least two projects', () => {
    expect(projects.length).toBeGreaterThanOrEqual(2);
  });

  it('should have valid project structures', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('short_description');
      expect(project).toHaveProperty('case_study_content');
      expect(project).toHaveProperty('image_url');
    });
  });
});
