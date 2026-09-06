import { projectsData } from '@/data/projects';
import { slugify } from './slug';

export const projectSlugs = new Set(projectsData.map((project) => slugify(project.title)));
