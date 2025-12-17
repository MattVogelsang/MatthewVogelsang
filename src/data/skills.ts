import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
	{
		id: 'languages',
		name: 'Languages',
		skills: [
			{ name: 'JavaScript', proficiency: 80 },
			{ name: 'TypeScript', proficiency: 92 },
			{ name: 'SQL', proficiency: 89 },
			{ name: 'Python', proficiency: 85 }
		]
	},
	{
		id: 'frameworks',
		name: 'Frameworks & Libraries',
		skills: [
			{ name: 'React', proficiency: 75 },
			{ name: 'Vue.js', proficiency: 80 },
			{ name: 'Node.js', proficiency: 85 },
			{ name: 'Express.js', proficiency: 85 },
			{ name: 'Tailwind CSS', proficiency: 90 },
			{ name: 'Bootstrap', proficiency: 85 },
			{ name: 'WordPress', proficiency: 75 },
			{ name: 'Sequelize', proficiency: 80 },
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
			{ name: 'Vercel', proficiency: 88 },
			{ name: 'Netlify', proficiency: 90 },
			{ name: 'Render', proficiency: 85 },
			{ name: 'Stripe', proficiency: 83 },
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
			{ name: 'RESTful API', proficiency: 85 },
			{ name: 'CI/CD Pipelines', proficiency: 83 },
			{ name: 'UI/UX Principles', proficiency: 82 }
		]
	}
];
