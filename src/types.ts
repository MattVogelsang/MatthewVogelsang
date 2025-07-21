export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  featured: boolean;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  goals: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
} 