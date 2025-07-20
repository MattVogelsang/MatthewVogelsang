import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
	{
		id: 'languages',
		name: 'Languages',
		skills: [
			{ name: 'JavaScript', proficiency: 80 },
			{ name: 'HTML5', proficiency: 89 },
			{ name: 'CSS3', proficiency: 92 },
			{ name: 'Python', proficiency: 85 }
		]
	},
	{
		id: 'frameworks',
		name: 'Frameworks & Libraries',
		skills: [
			{ name: 'React', proficiency: 75 },
			{ name: 'Redux', proficiency: 68 },
			{ name: 'Express.js', proficiency: 85 },
			{ name: 'Tailwind CSS', proficiency: 90 },
			{ name: 'PostgreSQL', proficiency: 70 }
		]
	},
	{
		id: 'tools',
		name: 'Tools & Platforms',
		skills: [
			{ name: 'Git', proficiency: 92 },
			{ name: 'Webpack', proficiency: 85 },
			{ name: 'Vite', proficiency: 88 },
			{ name: 'Jest/Testing Library', proficiency: 82 },
			{ name: 'Figma', proficiency: 78 }
		]
	},
	{
		id: 'other',
		name: 'Other',
		skills: [
			{ name: 'Responsive Design', proficiency: 94 },
			{ name: 'Performance Optimization', proficiency: 88 },
			{ name: 'Accessibility', proficiency: 85 },
			{ name: 'UI/UX Principles', proficiency: 82 }
		]
	}
]; 