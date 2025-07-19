import { Project } from '../types';
import launchingSoonImg from '../images/launching-soon.jpg';
import spaceTourismImg from '../images/space-hero.jpg';
import shoppingAppImg from '../images/sneakers-hero.jpg';
import projectAtlasImg from '../images/project-atlas.jpg';
import classicoImg from '../images/classico.jpg';
import trinityInsuranceImg from '@/images/trinity-insurance.jpg';
import workoutGeneratorImg from '@/images/Workout-Generator.jpg';
import landscapeImg from '@/images/Landscape.jpg';
import shop23Img from '@/images/Shop23.jpg';
import swimWithSaraImg from '@/images/swim-with-sara.jpg';

export const projects: Project[] = [
	{
		id: 1,
		title: 'Project Atlas – Visual SEO Planning Tool',
		description:
			'An interactive SEO content strategy tool that lets users visually map topic clusters and internal linking using a drag-and-drop interface.',
		technologies: ['React', 'TypeScript', 'Vite', 'React Flow', 'Tailwind CSS'],
		imageUrl: projectAtlasImg,
		demoUrl: 'https://project-atlas-weld.vercel.app',
		featured: true,
		category: 'tooling',
		challenge:
			'SEO teams often struggle with visualizing content plans and internal linking strategies in a way that is both flexible and collaborative.',
		solution:
			'Built a drag-and-drop canvas app using React Flow where users can create topic clusters, assign metadata, and draw interlinking strategies that auto-save to localStorage.',
		outcome:
			'Validated with SEO experts as a valuable workflow tool. Showcases deep understanding of component architecture, data flow, and UX thinking tailored to niche content teams.',
		goals: [
			'Enable visual planning of SEO content strategies',
			'Support dynamic node creation and metadata editing',
			'Allow drag-and-drop repositioning and interlink mapping',
			'Persist data locally for seamless user experience'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Outlined pain points in SEO workflows and wireframed UX that reflects how strategists plan content clusters and links.'
			},
			{
				title: 'Development',
				description:
					'Engineered core functionality with React Flow, custom edge rendering, and localStorage hydration for persistence.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested usability with SEO professionals and iterated on UX details like node spacing, click targets, and sidebar flow.'
			}
		]
	},
	{
		id: 2,
		title: 'Trinity Insurance Website',
		description:
			'A modern, responsive website for Trinity Insurance, featuring a clean design and comprehensive insurance information.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: trinityInsuranceImg,
		demoUrl: 'https://www.trinityinv.net/',
		featured: true,
		category: 'business',
		challenge:
			'Create a professional insurance website that effectively communicates services while maintaining a modern, trustworthy aesthetic.',
		solution:
			'Developed a responsive React application with TypeScript, featuring clean UI components and optimized performance.',
		outcome:
			'Delivered a polished website that effectively showcases Trinity Insurance services and maintains a professional online presence.',
		goals: [
			'Create a professional and trustworthy design',
			'Ensure responsive layout across all devices',
			'Optimize for fast loading and performance',
			'Implement clear navigation and service information'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed insurance website best practices and planned a user-friendly information architecture.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, using Tailwind CSS for responsive styling and modern UI components.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	},
	{
		id: 3,
		title: 'Richy\'s Landscaping Website',
		description:
			'A modern, professional website for Richy\'s Landscaping, showcasing their landscaping services and portfolio in Hollywood, Florida.',
		technologies: ['Webflow', 'HTML', 'CSS', 'JavaScript'],
		imageUrl: landscapeImg,
		demoUrl: 'https://richys-landscaping.webflow.io/',
		featured: true,
		category: 'business',
		challenge:
			'Create a professional website that effectively communicates Richy\'s Landscaping services while maintaining a modern, trustworthy aesthetic.',
		solution:
			'Developed a responsive website using Webflow, featuring a clean design, service showcases, and customer testimonials.',
		outcome:
			'Delivered a polished website that effectively showcases Richy\'s Landscaping services and maintains a professional online presence.',
		goals: [
			'Create a professional and trustworthy design',
			'Ensure responsive layout across all devices',
			'Optimize for fast loading and performance',
			'Implement clear navigation and service information'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed landscaping website best practices and planned a user-friendly information architecture.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with Webflow, implementing responsive design and modern UI components.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	},
	{
		id: 4,
		title: 'Workout Generator',
		description:
			'An interactive web application that generates personalized workout routines based on user preferences for workout type, difficulty level, and data source.',
		technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'API Integration'],
		imageUrl: workoutGeneratorImg,
		demoUrl: 'https://mattvogelsang.github.io/Workout-Generator/workout_generator.html',
		featured: true,
		category: 'fitness',
		challenge:
			'Create a user-friendly application that helps users generate customized workout routines based on their preferences and fitness goals.',
		solution:
			'Developed a responsive web application with options for workout type, difficulty level, and data source (local database or Wger API).',
		outcome:
			'Created a practical tool that helps users quickly generate workout routines tailored to their needs, with the flexibility to use either local data or an external API.',
		goals: [
			'Provide customizable workout generation options',
			'Support multiple workout types and difficulty levels',
			'Integrate with external API for expanded exercise database',
			'Create an intuitive and responsive user interface'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed fitness app requirements and planned the user interface and data flow for workout generation.'
			},
			{
				title: 'Development',
				description:
					'Built the application with JavaScript, implementing form handling, API integration, and dynamic workout generation.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested the application across different devices and browsers, ensuring reliable workout generation and API integration.'
			}
		]
	},
	{
		id: 5,
		title: 'Classico – Luxury Ride-Share Landing Experience',
		description:
			'A refined, conversion-focused landing page for a luxury ride-share brand, featuring curated car showcases and a waitlist signup flow.',
		technologies: ['React', 'Vite'],
		imageUrl: classicoImg,
		demoUrl: 'https://ridewithclassico.com',
		featured: true,
		category: 'marketing',
		challenge:
			'The client needed a high-fidelity marketing site to establish brand presence and onboard early users - all while conveying luxury and trust.',
		solution:
			'Designed and developed a responsive React site with elegant visual hierarchy, smooth transitions, and a custom vehicle showcase, all optimized for performance and accessibility.',
		outcome:
			'Delivered a polished user experience that effectively communicated Classicos premium offering and captured early user interest through the waitlist funnel.',
		goals: [
			'Convey a luxury brand aesthetic through design',
			'Build a performant, responsive frontend experience',
			'Create a simple and clear waitlist onboarding flow',
			'Lay groundwork for future product expansion'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed luxury brand websites for layout patterns, tone, and conversion tactics to inform design direction.'
			},
			{
				title: 'Design & Prototyping',
				description:
					'Sketched layouts and visual hierarchy to guide user attention, with a strong focus on elegance and simplicity.'
			},
			{
				title: 'Development',
				description:
					'Used React and Vite to build responsive sections, image carousels, and a performant architecture with minimal build weight.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested across devices and screen sizes, tuned load speed, and refined accessibility for form elements and navigation.'
			}
		]
	},
	{
		id: 6,
		title: 'Space Tourism Website',
		description:
			'A modern, responsive website for a space tourism company, showcasing space travel experiences and destinations.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: spaceTourismImg,
		demoUrl: 'https://space-tourism-website.vercel.app',
		featured: true,
		category: 'tourism',
		challenge:
			'Create an engaging website that captures the excitement of space travel while maintaining a professional and trustworthy appearance.',
		solution:
			'Developed a responsive React application with TypeScript, featuring smooth animations and interactive elements.',
		outcome:
			'Delivered a polished website that effectively communicates the unique experience of space tourism and maintains user engagement.',
		goals: [
			'Create an immersive space tourism experience',
			'Ensure responsive design across all devices',
			'Implement smooth animations and transitions',
			'Optimize for performance and accessibility'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed space tourism websites and planned a user-friendly information architecture.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, using Tailwind CSS for responsive styling and modern UI components.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	},
	{
		id: 7,
		title: 'Shopping App',
		description:
			'A modern e-commerce platform for sneakers, featuring a clean design and seamless shopping experience.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: shoppingAppImg,
		demoUrl: 'https://mattvogelsang.github.io/e-commerce/',
		featured: true,
		category: 'ecommerce',
		challenge:
			'Develop an intuitive shopping experience that makes browsing and purchasing sneakers effortless.',
		solution:
			'Created a responsive React application with TypeScript, featuring product filtering, search, and a streamlined checkout process.',
		outcome:
			'Built a user-friendly e-commerce platform that effectively showcases products and facilitates easy purchases.',
		goals: [
			'Create an intuitive product browsing experience',
			'Implement efficient search and filtering',
			'Design a streamlined checkout process',
			'Ensure responsive design across devices'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed e-commerce best practices and planned the user interface and shopping flow.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, implementing product management and shopping cart functionality.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested across different devices and browsers, ensuring a smooth shopping experience.'
			}
		]
	},
	{
		id: 8,
		title: 'Launching Soon',
		description:
			'A placeholder project for upcoming work.',
		technologies: ['Coming Soon'],
		imageUrl: launchingSoonImg,
		demoUrl: 'https://mattvogelsang.github.io/countdown/',
		featured: false,
		category: 'placeholder',
		challenge:
			'Create a placeholder for future projects.',
		solution:
			'Added a simple placeholder project.',
		outcome:
			'Created a placeholder for future projects.',
		goals: [
			'Placeholder for future projects'
		],
		process: [
			{
				title: 'Coming Soon',
				description:
					'Details coming soon.'
			}
		]
	},
	{
		id: 9,
		title: 'Shop23 - E-commerce Platform',
		description:
			'A modern e-commerce platform built with React and Node.js, featuring product browsing, shopping cart functionality, and secure checkout process.',
		technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
		imageUrl: shop23Img,
		demoUrl: 'https://project3-shop23.onrender.com/',
		featured: true,
		category: 'e-commerce',
		challenge:
			'Create a full-featured e-commerce platform that provides a seamless shopping experience with secure payment processing and efficient product management.',
		solution:
			'Developed a responsive React application with Node.js backend, implementing features like product catalog, shopping cart, user authentication, and secure checkout.',
		outcome:
			'Delivered a robust e-commerce solution that demonstrates full-stack development capabilities and modern web application architecture.',
		goals: [
			'Implement secure user authentication and authorization',
			'Create an intuitive product browsing and search experience',
			'Develop a reliable shopping cart and checkout system',
			'Ensure responsive design across all devices'
		],
		process: [
			{
				title: 'Planning & Architecture',
				description:
					'Designed the application architecture, database schema, and API endpoints for optimal performance and scalability.'
			},
			{
				title: 'Development',
				description:
					'Built the frontend with React and Redux for state management, and developed the backend using Node.js and Express.'
			},
			{
				title: 'Testing & Deployment',
				description:
					'Conducted thorough testing of all features and deployed the application to Render for public access.'
			}
		]
	},
	{
		id: 10,
		title: 'Swim with Sara',
		description:
			'A modern, responsive website for Swim with Sara, showcasing swimming lessons and aquatic services with an engaging user experience.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: swimWithSaraImg,
		demoUrl: 'https://swimwithsara.vercel.app',
		featured: true,
		category: 'business',
		challenge:
			'Create an engaging website that effectively communicates swimming lesson services while maintaining a professional and trustworthy aesthetic.',
		solution:
			'Developed a responsive React application with TypeScript, featuring modern UI components and optimized performance for the swimming instruction business.',
		outcome:
			'Delivered a polished website that effectively showcases Swim with Sara services and maintains a professional online presence.',
		goals: [
			'Create a professional and engaging design',
			'Ensure responsive layout across all devices',
			'Optimize for fast loading and performance',
			'Implement clear navigation and service information'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed swimming instruction website best practices and planned a user-friendly information architecture.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, using Tailwind CSS for responsive styling and modern UI components.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	}
];
