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
import vdImg from '@/images/VD.jpg';
import empowhertoImg from '@/images/Empowherto.jpeg';
import paperboatImg from '@/images/Paperboat.jpg';
import apiTestImg from '@/images/API-test.png';
import cliftImg from '@/images/clift.png';

export const projects: Project[] = [
	{
		id: 1,
		title: 'EmpowHerTo - Women Empowerment Platform',
		description:
			'A modern web platform dedicated to empowering women with resources, community support, and opportunities for personal and professional growth.',
		technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		imageUrl: empowhertoImg,
		demoUrl: 'https://www.empowherto.org/',
		featured: true,
		category: 'social-impact',
		challenge:
			'Create an inclusive platform that provides women with access to resources, mentorship opportunities, and community support for their personal and professional development.',
		solution:
			'Developed a comprehensive web platform with user-friendly interface, resource library, community features, and location-based services for women empowerment.',
		outcome:
			'Delivered a powerful platform that connects women with resources and opportunities, fostering a supportive community for empowerment and growth.',
		goals: [
			'Create an inclusive and accessible platform for women',
			'Provide location-based services and resources',
			'Build a supportive community network',
			'Ensure responsive design across all devices'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed women empowerment platform requirements and planned user-friendly features and community engagement tools.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, implementing modern UI components and location-based functionality.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	},
	{
		id: 2,
		title: 'Paperboat CRM - Customer Relationship Management Platform',
		description:
			'A comprehensive CRM platform designed to streamline customer relationships, manage sales pipelines, and enhance business productivity with modern web technologies.',
		technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		imageUrl: paperboatImg,
		demoUrl: 'https://www.paperboatcrm.com/',
		featured: true,
		category: 'business',
		challenge:
			'Create a modern CRM platform that helps businesses manage customer relationships, track sales opportunities, and improve team collaboration.',
		solution:
			'Developed a comprehensive web application with intuitive dashboard, contact management, sales pipeline tracking, and team collaboration features.',
		outcome:
			'Delivered a powerful CRM solution that streamlines business operations and enhances customer relationship management for modern businesses.',
		goals: [
			'Create an intuitive and user-friendly CRM interface',
			'Implement comprehensive contact and lead management',
			'Build sales pipeline tracking and reporting features',
			'Ensure responsive design across all devices'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed CRM requirements and planned user-friendly features for contact management and sales tracking.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, implementing modern UI components and comprehensive business management features.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and user experience.'
			}
		]
	},
	{
		id: 15,
		title: 'CareerLift - AI-Powered Job Search Automation',
		description:
			'An AI-powered job search automation platform that continuously finds and applies to relevant job openings 24/7, helping job seekers get hired faster while they focus on their career goals.',
		technologies: ['React', 'TypeScript', 'Node.js', 'AI Integration', 'Tailwind CSS'],
		imageUrl: cliftImg,
		demoUrl: 'https://www.thecareerlift.com/',
		featured: true,
		category: 'business',
		challenge:
			'Create an automated job search platform that helps job seekers find and apply to relevant positions efficiently, saving hours of manual application work.',
		solution:
			'Developed an AI-powered platform that automatically scans job boards, matches positions to user profiles, generates customized cover letters, and submits applications 24/7.',
		outcome:
			'Delivered a powerful automation tool that helps users apply to hundreds of jobs automatically, significantly reducing time-to-hire and increasing application success rates.',
		goals: [
			'Automate the job search and application process',
			'Provide intelligent job matching based on user profile',
			'Generate personalized cover letters for each application',
			'Enable 24/7 automated application submission'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed job search pain points and planned AI automation features for job matching and application submission.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, implementing AI algorithms for job matching, cover letter generation, and automated application submission.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing of automation features and optimized matching algorithms for better job relevance and application success rates.'
			}
		]
	},
	{
		id: 3,
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
		id: 4,
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
		id: 5,
		title: 'Web Design & Development Studio Site',
		description:
			'A modern web application showcasing innovative design and development solutions with a focus on user experience and performance.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: vdImg,
		demoUrl: 'https://vogelsang-designs.vercel.app',
		featured: true,
		category: 'web-app',
		challenge:
			'Create a modern web application that demonstrates cutting-edge design principles and development practices.',
		solution:
			'Developed a responsive React application with TypeScript, featuring modern UI components and optimized performance.',
		outcome:
			'Delivered a polished web application that showcases modern development practices and user experience design.',
		goals: [
			'Implement modern design principles',
			'Ensure responsive layout across all devices',
			'Optimize for fast loading and performance',
			'Create an intuitive user experience'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed modern web application requirements and planned the user interface and functionality.'
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
		id: 6,
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
		id: 7,
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
		id: 8,
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
		id: 9,
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
		id: 10,
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
		id: 11,
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
		id: 12,
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
		id: 13,
		title: 'API Testing & Integration Tool',
		description:
			'A comprehensive API testing and integration tool that allows developers to test, debug, and integrate REST APIs with an intuitive interface and real-time response visualization.',
		technologies: ['React', 'TypeScript', 'Node.js', 'REST API', 'JSON'],
		imageUrl: apiTestImg,
		demoUrl: 'https://api-skills-test-seven.vercel.app/',
		featured: true,
		category: 'tooling',
		challenge:
			'Create a user-friendly tool that simplifies API testing and integration for developers, providing clear visual feedback and efficient request/response handling.',
		solution:
			'Developed a modern web application with React and TypeScript that provides an intuitive interface for testing REST APIs, with real-time response visualization and request history.',
		outcome:
			'Delivered a powerful API testing tool that streamlines the development workflow and helps developers quickly test and integrate APIs with confidence.',
		goals: [
			'Provide an intuitive interface for API testing',
			'Enable real-time request and response visualization',
			'Support multiple HTTP methods and authentication',
			'Create a seamless developer experience'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed developer needs for API testing tools and planned features for request building and response visualization.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, implementing modern UI components for API request building and response display.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across different API endpoints and optimized for performance and user experience.'
			}
		]
	},
	{
		id: 14,
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
