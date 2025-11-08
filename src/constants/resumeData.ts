import { LucideIcon } from 'lucide-react'
import { Brain, Cloud, Code, Layers, Linkedin, Play, Rocket, Server } from 'lucide-react'

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  website: string
}

export interface Skill {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  skills: string[]
  expertiseLevel: number
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  achievements: string[]
}

export interface Education {
  degree: string
  school: string
  duration: string
  gpa: string
  relevant: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  link: string
  highlights: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credential: string
  icon: LucideIcon
}

export interface SocialMediaPost {
  id: number
  platform: string
  icon: LucideIcon
  title: string
  description: string
  content: string
  engagement: string
  date: string
  tags: string[]
  color: string
  bgColor: string
  borderColor: string
}

export const personalInfo: PersonalInfo = {
  name: 'Dhruvish Patel',
  title: 'Software Developer & AI Enthusiast',
  email: 'pateldhruvish612000@gmail.com',
  phone: '+91 6353573222',
  location: 'Ahmedabad, India',
  linkedin: 'www.linkedin.com/in/dhruvish09',
  github: 'github.com/Dhruvish09',
  website: 'dhruvish-patel.dev',
}

export const skills: Skill[] = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Server-side technologies and database management for scalable applications',
    gradient: 'from-green-500 to-emerald-500',
    skills: ['Python', 'FastAPI', 'Flask', 'Django', 'MySQL', 'MongoDB'],
    expertiseLevel: 90,
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Advanced AI technologies and machine learning frameworks for intelligent solutions',
    gradient: 'from-purple-500 to-pink-500',
    skills: ['GenAI', 'Langchain', 'Langraph', 'MCP SERVER', 'OpenAI API', 'All GEN MODEL API service builders'],
    expertiseLevel: 70,
  },
  {
    icon: Rocket,
    title: 'DevOps & Cloud',
    description: 'Infrastructure management and cloud deployment for production applications',
    gradient: 'from-orange-500 to-red-500',
    skills: ['AWS', 'Docker', 'Docker Compose', 'Kubernetes', 'GitHub Action', 'CI/CD'],
    expertiseLevel: 65,
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Modern web technologies and frameworks for building responsive user interfaces',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['HTML', 'Bootstrap', 'Next.js', 'Tailwind CSS'],
    expertiseLevel: 55,
  },
]

export const experience: Experience[] = [
  {
    company: 'Weam',
    position: 'Python Developer',
    duration: 'June 2024 - Present',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Developing Python applications with focus on AI integration',
      'Working with OpenAI API and Anthropic Claude for AI-powered solutions',
      'Contributing to full-stack development projects',
      'Collaborating with cross-functional teams in an on-site environment',
    ],
  },
  {
    company: 'Zymr, Inc.',
    position: 'Python Developer',
    duration: 'September 2021 - March 2024',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Developed software solutions using Python programming language',
      'Worked on full-stack development projects',
      'Collaborated with development teams on various software projects',
      'Gained extensive experience in software development methodologies',
    ],
  },
  {
    company: 'Aktiv Software',
    position: 'Odoo Developer',
    duration: 'July 2021 - September 2021',
    location: 'Ahmedabad, Gujarat, India',
    achievements: [
      'Worked as Odoo trainee gaining hands-on experience',
      'Learned Python programming language fundamentals',
      'Understood software development processes and workflows',
      'Gained foundational knowledge in ERP system development',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering - BE, Information Technology',
    school: 'Sardar Patel University (SPU), Vallabh Vidyanagar',
    duration: '2018 - 2021',
    gpa: '8.5/10.0',
    relevant: [
      'Web Development',
      'Jinja',
      'Information Technology',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Data Structures',
      'Algorithms',
    ],
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Government Polytechnic Ahmedabad',
    duration: '2015 - 2018',
    gpa: '9.1/10.0',
    relevant: [
      'Information Technology',
      'Programming Fundamentals',
      'Web Development',
      'Database Management',
      'Computer Networks',
      'Software Engineering',
      'System Analysis',
      'Project Management',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'WEAM AI Platform',
    description:
      'AI-Powered Communication, Agents & Automation Platform - A collaborative AI workspace unifying ChatGPT, Claude, Gemini, and LLaMA for building custom AI agents, prompt libraries, and real-time collaboration across document processing, chat workflows, and SEO tasks.',
    tech: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'Anthropic Claude',
      'Gemini',
      'Hugging Face',
      'MongoDB',
      'Pinecone',
      'Redis',
      'AWS S3',
      'Celery',
      'Docker',
      'Prometheus',
      'Grafana',
    ],
    link: 'weam.ai',
    highlights: [
      'Microservices architecture',
      'Multi-LLM integration',
      'Real-time collaboration',
      'Enterprise security',
      'Scalable backend operations',
    ],
  },
  {
    name: 'ZQA (Integrated Project Insights Management)',
    description:
      'Project intelligence platform centralizing engineering data from Jira, GitLab, Jenkins, SonarQube, and Zephyr with real-time dashboards for tracking test coverage, deployment health, and delivery velocity.',
    tech: ['Python', 'Flask', 'MySQL', 'ReactJS', 'Jenkins', 'Docker', 'Jira', 'GitLab', 'SonarQube'],
    link: 'zqa-platform.com',
    highlights: [
      'Real-time analytics',
      'Multi-source data integration',
      'DevOps visibility',
      'Interactive dashboards',
      'CI/CD pipeline insights',
    ],
  },
  {
    name: 'Portfolio Builder',
    description:
      'Dynamic portfolio builder web platform allowing users to customize sections, upload project content, and showcase skills with modern, interactive UI and responsive design.',
    tech: ['Python', 'Django', 'MySQL', 'Redis', 'Bootstrap', 'AWS S3', 'Celery', 'Docker', 'SMTP'],
    link: 'portfolio-builder.com',
    highlights: [
      'Dynamic content management',
      'Custom templates',
      'AWS S3 integration',
      'Email verification',
      'Dockerized deployment',
    ],
  },
  {
    name: 'Komplyd',
    description:
      'Cloud-native compliance platform for the cannabis industry offering robust API layer and enterprise data platform for regulatory requirements, compliance workflows, and state-by-state operational data management.',
    tech: ['Python', 'Flask', 'MySQL', 'REST API', 'Multi-tenant', 'Cloud-native', 'Nose testing'],
    link: 'komplyd.com',
    highlights: [
      'Regulatory compliance',
      'Multi-tenant architecture',
      'Secure REST APIs',
      'Enterprise data platform',
      'Cloud scalability',
    ],
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credential: 'AWS-SAA-001',
    icon: Server,
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credential: 'GCP-PRO-DEV-001',
    icon: Cloud,
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2021',
    credential: 'CKA-001',
    icon: Layers,
  },
]

export const socialMediaPosts: SocialMediaPost[] = [
  {
    id: 1,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'AI in Modern Web Development',
    description: 'Exploring how artificial intelligence is revolutionizing web development practices',
    content:
      "AI is transforming how we build web applications. From automated testing to intelligent user interfaces, the possibilities are endless. Here's my take on the future of web development with AI integration.",
    engagement: '1.2K+ views',
    date: '2 days ago',
    tags: ['AI', 'Web Development', 'Innovation'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 2,
    platform: 'YouTube',
    icon: Play,
    title: 'React Performance Optimization',
    description: 'Complete guide to optimizing React applications for better performance',
    content:
      "Performance is crucial in modern web applications. In this comprehensive tutorial, I cover React.memo, useMemo, useCallback, and other optimization techniques that will make your React apps lightning fast.",
    engagement: '15K+ views',
    date: '1 week ago',
    tags: ['React', 'Performance', 'Tutorial'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'Building Scalable Systems',
    description: 'Architecture patterns for building systems that grow with your business',
    content:
      "Scalability isn't just about handling more users. It's about building systems that can evolve and adapt. Let me share the key principles I've learned from building systems that serve millions of users.",
    engagement: '856 views',
    date: '3 days ago',
    tags: ['Architecture', 'Scalability', 'Systems Design'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 4,
    platform: 'YouTube',
    icon: Play,
    title: 'Full-Stack Development Guide',
    description: 'From frontend to backend: Complete development workflow',
    content:
      "Full-stack development is more than just knowing multiple technologies. It's about understanding how different parts work together. Join me as I walk through a complete development workflow.",
    engagement: '8.2K+ views',
    date: '2 weeks ago',
    tags: ['Full-Stack', 'Development', 'Workflow'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
  {
    id: 5,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'Career Growth in Tech',
    description: 'Strategies for advancing your career in the technology industry',
    content:
      "Your career in tech is a journey, not a destination. Here are the strategies that helped me grow from a junior developer to a senior role, and how you can apply them to your own career path.",
    engagement: '2.1K+ views',
    date: '5 days ago',
    tags: ['Career', 'Growth', 'Tech'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 6,
    platform: 'YouTube',
    icon: Play,
    title: 'AI Integration Tutorials',
    description: 'Step-by-step guide to integrating AI into your applications',
    content:
      "AI integration doesn't have to be complicated. In this series, I'll show you how to add AI features to your applications using popular APIs and libraries. Let's make AI accessible to every developer.",
    engagement: '12K+ views',
    date: '3 weeks ago',
    tags: ['AI', 'Integration', 'Tutorial'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
  {
    id: 7,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'Microservices Best Practices',
    description: 'Lessons learned from building and maintaining microservices',
    content:
      "Microservices offer great flexibility but come with their own challenges. Here are the best practices I've discovered through trial and error, and how to avoid common pitfalls.",
    engagement: '1.5K+ views',
    date: '1 week ago',
    tags: ['Microservices', 'Best Practices', 'Architecture'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 8,
    platform: 'YouTube',
    icon: Play,
    title: 'Database Design Patterns',
    description: 'Designing efficient and scalable database architectures',
    content:
      'Good database design is the foundation of any successful application. Learn the essential patterns and principles that will help you design databases that perform well and scale with your needs.',
    engagement: '6.8K+ views',
    date: '4 weeks ago',
    tags: ['Database', 'Design', 'Architecture'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
  {
    id: 9,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'DevOps Culture Implementation',
    description: 'Building a DevOps culture in traditional organizations',
    content:
      "DevOps is more than tools and automation. It's about culture, collaboration, and continuous improvement. Here's how to implement DevOps principles in organizations that are resistant to change.",
    engagement: '987 views',
    date: '4 days ago',
    tags: ['DevOps', 'Culture', 'Collaboration'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 10,
    platform: 'YouTube',
    icon: Play,
    title: 'Security Best Practices',
    description: 'Protecting your applications from common security threats',
    content:
      'Security should be built into your development process from day one. Learn the essential security practices that every developer should know, and how to implement them in your projects.',
    engagement: '9.1K+ views',
    date: '5 weeks ago',
    tags: ['Security', 'Best Practices', 'Development'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
  {
    id: 11,
    platform: 'LinkedIn',
    icon: Linkedin,
    title: 'Cloud-Native Development',
    description: 'Building applications designed for the cloud from the ground up',
    content:
      "Cloud-native development is about more than just deploying to the cloud. It's about designing applications that leverage cloud capabilities and scale automatically. Here's my approach to cloud-native architecture.",
    engagement: '1.8K+ views',
    date: '6 days ago',
    tags: ['Cloud-Native', 'Architecture', 'Scalability'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-100/20 via-indigo-100/15 to-purple-100/15',
    borderColor: 'blue-400/50',
  },
  {
    id: 12,
    platform: 'YouTube',
    icon: Play,
    title: 'Testing Strategies for Modern Apps',
    description: 'Comprehensive testing approaches for complex applications',
    content:
      "Testing is crucial for maintaining code quality and preventing bugs. In this comprehensive guide, I'll show you how to implement effective testing strategies for modern web applications.",
    engagement: '7.3K+ views',
    date: '6 weeks ago',
    tags: ['Testing', 'Quality', 'Development'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-100/20 via-pink-100/15 to-orange-100/15',
    borderColor: 'red-400/50',
  },
]

export const resumeData = {
  personalInfo,
  skills,
  experience,
  education,
  projects,
  certifications,
  socialMediaPosts,
}

