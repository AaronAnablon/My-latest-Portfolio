import { projectsData } from '@/data/projects';
import { slugify } from './slug';

export const TESTIMONIALS_SLUG = 'client-testimonials';

export const postSlugs = new Set([
  ...projectsData.map((project) => slugify(project.title)),
  TESTIMONIALS_SLUG,
]);
