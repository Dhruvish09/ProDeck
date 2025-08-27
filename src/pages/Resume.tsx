import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  User, Briefcase, GraduationCap, Code, Globe, 
  Mail, Phone, MapPin, Linkedin, Github, ExternalLink,
  Download, Star, ArrowRight, ChevronRight,
  Calendar, CheckCircle, TrendingUp, Lightbulb, Rocket,
  X, Server, Brain, ShieldCheck, Users, Target, MessageSquare, Key, Building,
  Cloud, Layers, Play
} from 'lucide-react'

const Profile = () => {
  const [selectedModal, setSelectedModal] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)




  const personalInfo = {
    name: "Dhruvish Patel",
    title: "Software Developer & AI Enthusiast",
    email: "pateldhruvish612000@gmail.com",
    phone: "+91 6353573222",
    location: "Ahmedabad, India",
    linkedin: "www.linkedin.com/in/dhruvish09",
    github: "github.com/Dhruvish09",
    website: "dhruvish-patel.dev"
  }

  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern web technologies and frameworks for building responsive user interfaces',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Server-side technologies and database management for scalable applications',
      gradient: 'from-green-500 to-emerald-500',
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI technologies and machine learning frameworks for intelligent solutions',
      gradient: 'from-purple-500 to-pink-500',
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "NLP", "Computer Vision"]
    },
    {
      icon: Rocket,
      title: 'DevOps & Cloud',
      description: 'Infrastructure management and cloud deployment for production applications',
      gradient: 'from-orange-500 to-red-500',
      skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Terraform"]
    }
  ]

  const experience = [
    {
      company: "Weam",
      position: "Python Developer",
      duration: "June 2024 - Present",
      location: "Ahmedabad, Gujarat, India",
      achievements: [
        "Developing Python applications with focus on AI integration",
        "Working with OpenAI API and Anthropic Claude for AI-powered solutions",
        "Contributing to full-stack development projects",
        "Collaborating with cross-functional teams in an on-site environment"
      ]
    },
    {
      company: "Zymr, Inc.",
      position: "Python Developer",
      duration: "September 2021 - March 2024", 
      location: "Ahmedabad, Gujarat, India",
      achievements: [
        "Developed software solutions using Python programming language",
        "Worked on full-stack development projects",
        "Collaborated with development teams on various software projects",
        "Gained extensive experience in software development methodologies"
      ]
    },
    {
      company: "Aktiv Software",
      position: "Odoo Developer",
      duration: "July 2021 - September 2021",
      location: "Ahmedabad, Gujarat, India", 
      achievements: [
        "Worked as Odoo trainee gaining hands-on experience",
        "Learned Python programming language fundamentals",
        "Understood software development processes and workflows",
        "Gained foundational knowledge in ERP system development"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Engineering - BE, Information Technology",
      school: "Sardar Patel University (SPU), Vallabh Vidyanagar",
      duration: "2018 - 2021",
      gpa: "8.5/10.0",
      relevant: ["Web Development", "Jinja", "Information Technology", "Software Engineering", "Database Systems", "Computer Networks", "Data Structures", "Algorithms"]
    },
    {
      degree: "Diploma in Information Technology",
      school: "Government Polytechnic Ahmedabad",
      duration: "2015 - 2018",
      gpa: "9.1/10.0",
      relevant: ["Information Technology", "Programming Fundamentals", "Web Development", "Database Management", "Computer Networks", "Software Engineering", "System Analysis", "Project Management"]
    }
  ]

  const projects = [
    {
      name: "WEAM AI Platform",
      description: "AI-Powered Communication, Agents & Automation Platform - A collaborative AI workspace unifying ChatGPT, Claude, Gemini, and LLaMA for building custom AI agents, prompt libraries, and real-time collaboration across document processing, chat workflows, and SEO tasks.",
      tech: ["Python", "FastAPI", "OpenAI API", "Anthropic Claude", "Gemini", "Hugging Face", "MongoDB", "Pinecone", "Redis", "AWS S3", "Celery", "Docker", "Prometheus", "Grafana"],
      link: "weam.ai",
      highlights: ["Microservices architecture", "Multi-LLM integration", "Real-time collaboration", "Enterprise security", "Scalable backend operations"]
    },
    {
      name: "ZQA (Integrated Project Insights Management)",
      description: "Project intelligence platform centralizing engineering data from Jira, GitLab, Jenkins, SonarQube, and Zephyr with real-time dashboards for tracking test coverage, deployment health, and delivery velocity.",
      tech: ["Python", "Flask", "MySQL", "ReactJS", "Jenkins", "Docker", "Jira", "GitLab", "SonarQube"],
      link: "zqa-platform.com",
      highlights: ["Real-time analytics", "Multi-source data integration", "DevOps visibility", "Interactive dashboards", "CI/CD pipeline insights"]
    },
    {
      name: "Portfolio Builder",
      description: "Dynamic portfolio builder web platform allowing users to customize sections, upload project content, and showcase skills with modern, interactive UI and responsive design.",
      tech: ["Python", "Django", "MySQL", "Redis", "Bootstrap", "AWS S3", "Celery", "Docker", "SMTP"],
      link: "portfolio-builder.com",
      highlights: ["Dynamic content management", "Custom templates", "AWS S3 integration", "Email verification", "Dockerized deployment"]
    },
    {
      name: "Komplyd",
      description: "Cloud-native compliance platform for the cannabis industry offering robust API layer and enterprise data platform for regulatory requirements, compliance workflows, and state-by-state operational data management.",
      tech: ["Python", "Flask", "MySQL", "REST API", "Multi-tenant", "Cloud-native", "Nose testing"],
      link: "komplyd.com",
      highlights: ["Regulatory compliance", "Multi-tenant architecture", "Secure REST APIs", "Enterprise data platform", "Cloud scalability"]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-SAA-001",
      icon: Server
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022", 
      credential: "GCP-PRO-DEV-001",
      icon: Cloud
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credential: "CKA-001",
      icon: Layers
    }
  ]

  const socialMediaPosts = [
    {
      id: 1,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "AI in Modern Web Development",
      description: "Exploring how artificial intelligence is revolutionizing web development practices",
      content: "AI is transforming how we build web applications. From automated testing to intelligent user interfaces, the possibilities are endless. Here's my take on the future of web development with AI integration.",
      engagement: "1.2K+ views",
      date: "2 days ago",
      tags: ["AI", "Web Development", "Innovation"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 2,
      platform: "YouTube",
      icon: Play,
      title: "React Performance Optimization",
      description: "Complete guide to optimizing React applications for better performance",
      content: "Performance is crucial in modern web applications. In this comprehensive tutorial, I cover React.memo, useMemo, useCallback, and other optimization techniques that will make your React apps lightning fast.",
      engagement: "15K+ views",
      date: "1 week ago",
      tags: ["React", "Performance", "Tutorial"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    },
    {
      id: 3,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "Building Scalable Systems",
      description: "Architecture patterns for building systems that grow with your business",
      content: "Scalability isn't just about handling more users. It's about building systems that can evolve and adapt. Let me share the key principles I've learned from building systems that serve millions of users.",
      engagement: "856 views",
      date: "3 days ago",
      tags: ["Architecture", "Scalability", "Systems Design"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 4,
      platform: "YouTube",
      icon: Play,
      title: "Full-Stack Development Guide",
      description: "From frontend to backend: Complete development workflow",
      content: "Full-stack development is more than just knowing multiple technologies. It's about understanding how different parts work together. Join me as I walk through a complete development workflow.",
      engagement: "8.2K+ views",
      date: "2 weeks ago",
      tags: ["Full-Stack", "Development", "Workflow"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    },
    {
      id: 5,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "Career Growth in Tech",
      description: "Strategies for advancing your career in the technology industry",
      content: "Your career in tech is a journey, not a destination. Here are the strategies that helped me grow from a junior developer to a senior role, and how you can apply them to your own career path.",
      engagement: "2.1K+ views",
      date: "5 days ago",
      tags: ["Career", "Growth", "Tech"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 6,
      platform: "YouTube",
      icon: Play,
      title: "AI Integration Tutorials",
      description: "Step-by-step guide to integrating AI into your applications",
      content: "AI integration doesn't have to be complicated. In this series, I'll show you how to add AI features to your applications using popular APIs and libraries. Let's make AI accessible to every developer.",
      engagement: "12K+ views",
      date: "3 weeks ago",
      tags: ["AI", "Integration", "Tutorial"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    },
    {
      id: 7,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "Microservices Best Practices",
      description: "Lessons learned from building and maintaining microservices",
      content: "Microservices offer great flexibility but come with their own challenges. Here are the best practices I've discovered through trial and error, and how to avoid common pitfalls.",
      engagement: "1.5K+ views",
      date: "1 week ago",
      tags: ["Microservices", "Best Practices", "Architecture"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 8,
      platform: "YouTube",
      icon: Play,
      title: "Database Design Patterns",
      description: "Designing efficient and scalable database architectures",
      content: "Good database design is the foundation of any successful application. Learn the essential patterns and principles that will help you design databases that perform well and scale with your needs.",
      engagement: "6.8K+ views",
      date: "4 weeks ago",
      tags: ["Database", "Design", "Architecture"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    },
    {
      id: 9,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "DevOps Culture Implementation",
      description: "Building a DevOps culture in traditional organizations",
      content: "DevOps is more than tools and automation. It's about culture, collaboration, and continuous improvement. Here's how to implement DevOps principles in organizations that are resistant to change.",
      engagement: "987 views",
      date: "4 days ago",
      tags: ["DevOps", "Culture", "Collaboration"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 10,
      platform: "YouTube",
      icon: Play,
      title: "Security Best Practices",
      description: "Protecting your applications from common security threats",
      content: "Security should be built into your development process from day one. Learn the essential security practices that every developer should know, and how to implement them in your projects.",
      engagement: "9.1K+ views",
      date: "5 weeks ago",
      tags: ["Security", "Best Practices", "Development"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    },
    {
      id: 11,
      platform: "LinkedIn",
      icon: Linkedin,
      title: "Cloud-Native Development",
      description: "Building applications designed for the cloud from the ground up",
      content: "Cloud-native development is about more than just deploying to the cloud. It's about designing applications that leverage cloud capabilities and scale automatically. Here's my approach to cloud-native architecture.",
      engagement: "1.8K+ views",
      date: "6 days ago",
      tags: ["Cloud-Native", "Architecture", "Scalability"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-100/20 via-indigo-100/15 to-purple-100/15",
      borderColor: "blue-400/50"
    },
    {
      id: 12,
      platform: "YouTube",
      icon: Play,
      title: "Testing Strategies for Modern Apps",
      description: "Comprehensive testing approaches for complex applications",
      content: "Testing is crucial for maintaining code quality and preventing bugs. In this comprehensive guide, I'll show you how to implement effective testing strategies for modern web applications.",
      engagement: "7.3K+ views",
      date: "6 weeks ago",
      tags: ["Testing", "Quality", "Development"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/20 via-pink-100/15 to-orange-100/15",
      borderColor: "red-400/50"
    }
  ]

  const handleCardClick = (data: any, type: string) => {
    setSelectedModal({ data, type })
    setIsModalOpen(true)
  }

  const handleDownload = () => {
    // For Next.js, we'll use a direct link to the PDF
    const link = document.createElement('a')
    link.href = '/Dhruvish_Resume.pdf'
    link.download = 'Dhruvish_Patel_Profile.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    if (!isOpen) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Details</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="h-full w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

            {/* Hero Section - Unique Animated Design */}
      <div className="relative z-10 py-24 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-300/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-32 w-24 h-24 border-2 border-pink-300/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-32 w-20 h-20 border-2 border-indigo-300/30 rounded-full"
          />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                top: `${20 + i * 8}%`,
                left: `${15 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Enhanced Main Icon with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Central Icon Container with Enhanced Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 0.95, 1],
                  y: [0, -8, 4, 0],
                  boxShadow: [
                    "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
                    "0 35px 60px -15px rgba(236, 72, 153, 0.4)",
                    "0 20px 40px -10px rgba(99, 102, 241, 0.3)",
                    "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-32 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
              >
                {/* Animated Background Pattern */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                                    radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    y: [0, -5, 3, 0],
                    filter: [
                      "drop-shadow(0 0 0 rgba(255,255,255,0))",
                      "drop-shadow(0 0 8px rgba(255,255,255,0.6))",
                      "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 0 rgba(255,255,255,0))"
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <User className="h-16 w-16 text-white drop-shadow-lg" />
                </motion.div>
                
                {/* Dynamic Morphing Rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 0.8, 1],
                    opacity: [0.3, 0.6, 0.2, 0.3],
                    borderRadius: ["50%", "45%", "55%", "50%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 border-2 border-purple-300/30 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [0.8, 1.2, 0.9, 0.8],
                    opacity: [0.2, 0.5, 0.1, 0.2],
                    borderRadius: ["50%", "55%", "40%", "50%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -inset-6 border border-pink-300/20 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [1.2, 0.9, 1.1, 1.2],
                    opacity: [0.15, 0.4, 0.05, 0.15],
                    borderRadius: ["50%", "40%", "60%", "50%"],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                  className="absolute -inset-8 border border-indigo-300/15 rounded-full"
                />
                
                {/* Enhanced Outer Glow Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 0.8, 1],
                    opacity: [0.3, 0.7, 0.2, 0.3],
                    filter: [
                      "blur(20px)",
                      "blur(30px)",
                      "blur(15px)",
                      "blur(20px)"
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-8 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-full blur-xl"
                />
                
                {/* Additional Glow Layer */}
                <motion.div
                  animate={{
                    scale: [0.8, 1.6, 0.9, 0.8],
                    opacity: [0.2, 0.5, 0.1, 0.2],
                    filter: [
                      "blur(30px)",
                      "blur(40px)",
                      "blur(25px)",
                      "blur(30px)"
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -inset-12 bg-gradient-to-r from-purple-300/15 via-pink-300/15 to-indigo-300/15 rounded-full blur-2xl"
                />
              </motion.div>
              
              {/* Dynamic Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 0.8, 1],
                    opacity: [0.3, 0.8, 0.2, 0.3],
                    y: [0, -20, 10, -5, 0],
                    x: [0, 15, -10, 8, 0],
                    filter: [
                      "blur(0px)",
                      "blur(2px)",
                      "blur(0px)",
                      "blur(1px)",
                      "blur(0px)"
                    ],
                  }}
                  transition={{
                    duration: 8 + i * 1.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
                  style={{
                    top: `${Math.cos(i * Math.PI / 3) * 80 + 64}px`,
                    left: `${Math.sin(i * Math.PI / 3) * 80 + 64}px`,
                  }}
                />
              ))}
              
              {/* Additional Floating Geometric Shapes */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`shape-${i}`}
                  animate={{
                    scale: [1, 1.4, 0.7, 1],
                    opacity: [0.2, 0.6, 0.1, 0.2],
                    rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                    borderRadius: ["50%", "30%", "50%", "70%", "50%"],
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-indigo-400"
                  style={{
                    top: `${Math.cos(i * Math.PI / 2) * 60 + 64}px`,
                    left: `${Math.sin(i * Math.PI / 2) * 60 + 64}px`,
                  }}
                />
              ))}
              
              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{
                    y: [0, -40, 20, -10, 0],
                    x: [0, 20, -15, 10, 0],
                    opacity: [0, 0.9, 0.4, 0.7, 0],
                    scale: [0, 1.2, 0.6, 0.9, 0],
                    filter: [
                      "blur(0px)",
                      "blur(1px)",
                      "blur(0px)",
                      "blur(0.5px)",
                      "blur(0px)"
                    ],
                  }}
                  transition={{
                    duration: 8 + i * 0.8,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{
                    top: `${20 + i * 8}%`,
                    left: `${15 + i * 10}%`,
                  }}
                />
              ))}
              
              {/* Wave Ripple Effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.4, 0, 0.4],
                    borderRadius: ["50%", "40%", "50%"],
                    borderWidth: ["1px", "2px", "1px"],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border border-purple-300/30 rounded-full"
                />
              ))}
              
              {/* Floating Energy Orbs */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.7, 0.3],
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    filter: [
                      "blur(0px)",
                      "blur(1px)",
                      "blur(0px)"
                    ],
                  }}
                  transition={{
                    duration: 5 + i * 1,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full shadow-lg"
                  style={{
                    top: `${30 + i * 6}%`,
                    left: `${25 + i * 8}%`,
                  }}
                />
              ))}
              
              {/* Dynamic Morphing Rings */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 0.9, 1],
                  opacity: [0.3, 0, 0.2, 0.3],
                  borderRadius: ["50%", "45%", "55%", "50%"],
                  borderWidth: ["2px", "3px", "1px", "2px"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-2 border-purple-400/20 rounded-full"
              />
              
              <motion.div
                animate={{
                  scale: [0.9, 2.2, 1.1, 0.9],
                  opacity: [0.2, 0, 0.3, 0.2],
                  borderRadius: ["50%", "55%", "40%", "50%"],
                  borderWidth: ["1px", "2px", "0.5px", "1px"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute inset-0 border border-pink-400/15 rounded-full"
              />
            </div>
          </motion.div>

          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(135deg, #1f2937, #7c3aed, #ec4899, #6366f1, #8b5cf6, #1f2937)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {personalInfo.name}
            </motion.h1>
            
            {/* Animated Title with Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-8"
            >
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {personalInfo.title.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 1.2 + index * 0.05 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </motion.div>


        </div>
      </div>



      {/* Skills Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl">
                <Code className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #1f2937, #7c3aed, #ec4899, #1f2937)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Technical Skills & Expertise
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive skill set spanning frontend, backend, AI/ML, and cloud technologies
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(skillGroup, 'skill')}
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 shadow-lg overflow-hidden group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${skillGroup.gradient} rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          <skillGroup.icon className="h-10 w-10 text-white drop-shadow-lg" />
                        </motion.div>
                        
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} rounded-2xl blur-xl opacity-30`}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                          {skillGroup.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {skillGroup.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Click Indicator */}
                    <div className="flex items-center justify-end mt-4">
                      <motion.div
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-purple-500 group-hover:text-purple-600 transition-colors duration-300"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center">
                  <Briefcase className="h-12 w-12 text-white" />
                </div>
                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full" />
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                background: "linear-gradient(135deg, #1e40af, #3730a3, #7c3aed, #ec4899)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Professional Experience
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Proven track record of delivering innovative solutions and driving technical excellence across diverse domains
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((job) => (
              <motion.div
                key={`${job.company}-${job.position}`}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(job, 'experience')}
              >
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 shadow-lg transition-all duration-500">
                  
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"
                  />
                  
                  {/* Left Border Accent */}
                  <motion.div
                    animate={{
                      scaleY: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
                  />
                  
                  <div className="relative z-10 p-8">
                    {/* Header Row with Icon */}
                    <div className="flex items-start space-x-6 mb-6">
                      {/* Company Icon */}
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ 
                          rotate: [0, 8, -8, 0],
                          scale: 1.05
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                          <Briefcase className="h-8 w-8 text-white" />
                          {/* Icon Glow */}
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30"
                          />
                        </div>
                      </motion.div>
                      
                      {/* Job Details */}
                      <div className="flex-1 min-w-0">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-2"
                          whileHover={{ scale: 1.01 }}
                        >
                          {job.position}
                        </motion.h3>
                        
                        <div className="flex items-center flex-wrap gap-3 mb-3">
                          <motion.span 
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold rounded-full text-sm border border-blue-200/50"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Building className="w-4 h-4 mr-2" />
                            {job.company}
                          </motion.span>
                          
                          <motion.div 
                            className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-full text-sm"
                            whileHover={{ scale: 1.02 }}
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </motion.div>
                          
                          <motion.div 
                            className="flex items-center px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200/50"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {job.duration}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements Section */}
                    <div className="relative">
                      {/* Connection Line */}
                      <motion.div
                        animate={{
                          scaleY: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400"
                      />
                      
                      <motion.ul 
                        className="space-y-4 ml-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {job.achievements.slice(0, 4).map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            variants={{
                              hidden: { opacity: 0, x: -30 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.6, delay: achievementIndex * 0.15 }}
                            className="relative group/item"
                          >
                            {/* Achievement Bullet */}
                            <motion.div 
                              className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                              whileHover={{ scale: 1.2 }}
                            >
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: achievementIndex * 0.2,
                                  ease: "easeInOut"
                                }}
                                className="w-2 h-2 bg-white rounded-full"
                              />
                            </motion.div>
                            
                            {/* Achievement Text */}
                            <motion.div 
                              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:border-blue-300/50 transition-all duration-300 group-hover/item:shadow-md group-hover/item:bg-white/90"
                            >
                              <span className="text-gray-700 leading-relaxed text-sm group-hover/item:text-blue-700 transition-colors duration-300">
                                {achievement}
                              </span>
                            </motion.div>
                          </motion.li>
                        ))}
                      </motion.ul>
                      
                      {/* View More Indicator */}
                      {job.achievements.length > 4 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="ml-16 mt-6 pt-4 border-t border-gray-200/50"
                        >
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-300"
                          >
                            <span>View all {job.achievements.length} achievements</span>
                            <motion.div
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="ml-2"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.div>
                          </motion.button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Education Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                {/* Main Graduation Cap */}
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <GraduationCap className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  {/* Inner Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-xl opacity-30"
                  />
                </motion.div>
                
                {/* Academic Stars - Floating Around */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {/* Star 1 - Top */}
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Star className="w-4 h-4 text-yellow-400 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Star 2 - Right */}
                  <motion.div
                    animate={{
                      scale: [1.2, 0.8, 1.2],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                  >
                    <Star className="w-3 h-3 text-cyan-400 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Star 3 - Bottom */}
                  <motion.div
                    animate={{
                      scale: [0.9, 1.1, 0.9],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  >
                    <Star className="w-4 h-4 text-sky-400 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Star 4 - Left */}
                  <motion.div
                    animate={{
                      scale: [1.1, 0.9, 1.1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Star className="w-3 h-3 text-blue-400 drop-shadow-lg" />
                  </motion.div>
                </motion.div>
                
                {/* Knowledge Particles - Floating Upward */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  {/* Particle 1 */}
                  <motion.div
                    animate={{
                      scale: [0.5, 1, 0.5],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full"
                  />
                  
                  {/* Particle 2 */}
                  <motion.div
                    animate={{
                      scale: [0.3, 0.8, 0.3],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-sky-300 rounded-full"
                  />
                  
                  {/* Particle 3 */}
                  <motion.div
                    animate={{
                      scale: [0.6, 1.2, 0.6],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
                  />
                </motion.div>
                
                {/* Achievement Rings - Expanding */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 2
                  }}
                  className="absolute inset-0 border border-sky-400/20 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 relative z-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                background: "linear-gradient(135deg, #0d9488, #14b8a6, #06b6d4, #0891b2)",
                backgroundSize: "100% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              transition={{
                delay: 0.2,
                duration: 0.8
              }}
            >
              Academic Excellence
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Strong academic foundation from world-renowned institutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:border-teal-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 shadow-lg overflow-hidden group-hover:scale-[1.02] h-full flex flex-col min-h-[400px]">
                  
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-100/20 via-emerald-100/15 to-cyan-100/15 rounded-3xl"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 5, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full shadow-sm opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -5, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.7,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full shadow-sm opacity-60"
                  />
                  
                  {/* Additional Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      x: [0, -8, 0],
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-4 w-2 h-2 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-50"
                  />
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      x: [0, 8, 0],
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      delay: index * 0.9,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-1/2 right-4 w-2 h-2 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full"
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300"
                        whileHover={{
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          <GraduationCap className="h-8 w-8 text-white" />
                        </motion.div>
                        
                        {/* Enhanced Glow Effect */}
                        <motion.div
                          animate={{
                            opacity: [0.4, 0.9, 0.4],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-teal-300 via-emerald-300 to-cyan-300 rounded-2xl blur-xl opacity-20"
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-teal-600 font-semibold mb-1">{edu.school}</p>
                        <p className="text-gray-500 text-sm">{edu.duration}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">GPA</span>
                        <motion.span 
                          className="text-xl font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {edu.gpa}
                        </motion.span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course, courseIndex) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: courseIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -2,
                              rotate: [0, 2, -2, 0]
                            }}
                            className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 text-sm font-medium rounded-full border border-teal-200 hover:from-teal-100 hover:to-emerald-100 hover:shadow-md hover:shadow-teal-200/30 transition-all duration-300 cursor-pointer"
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: courseIndex * 0.2,
                                ease: "easeInOut"
                              }}
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                            </motion.div>
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section - Redesigned with Hexagonal Cards */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-slate-400/20 to-slate-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-full blur-3xl"
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-slate-300/30 transform rotate-45"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-slate-400/30 transform rotate-12"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                {/* Main Rocket Icon with Enhanced Animations */}
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Rocket className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  {/* Inner Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full blur-xl opacity-30"
                  />
                </motion.div>
                
                {/* Dynamic Floating Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 0.8, 1],
                      opacity: [0.3, 0.8, 0.2, 0.3],
                      y: [0, -20, 10, -5, 0],
                      x: [0, 15, -10, 8, 0],
                      filter: [
                        "blur(0px)",
                        "blur(2px)",
                        "blur(0px)",
                        "blur(1px)",
                        "blur(0px)"
                      ],
                    }}
                    transition={{
                      duration: 8 + i * 1.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full shadow-lg"
                    style={{
                      top: `${Math.cos(i * Math.PI / 3) * 80 + 64}px`,
                      left: `${Math.sin(i * Math.PI / 3) * 80 + 64}px`,
                    }}
                  />
                ))}
                
                {/* Additional Floating Geometric Shapes */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`shape-${i}`}
                    animate={{
                      scale: [1, 1.4, 0.7, 1],
                      opacity: [0.2, 0.6, 0.1, 0.2],
                      rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                      borderRadius: ["50%", "30%", "50%", "70%", "50%"],
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-slate-500 to-slate-600"
                    style={{
                      top: `${Math.cos(i * Math.PI / 2) * 60 + 64}px`,
                      left: `${Math.sin(i * Math.PI / 2) * 60 + 64}px`,
                    }}
                  />
                ))}
                
                {/* Success Rings - Expanding */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 border-2 border-slate-400/40 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 2
                  }}
                  className="absolute inset-0 border border-slate-400/30 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 relative z-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                background: "linear-gradient(135deg, #475569, #64748b, #94a3b8, #cbd5e1)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                delay: 0.2,
                duration: 0.8
              }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Innovative solutions that demonstrate technical expertise and creative problem-solving
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                className="group cursor-pointer perspective-1000"
                onClick={() => handleCardClick(project, 'project')}
              >
                {/* Hexagonal Card Design */}
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-2" style={{ perspective: '1000px' }}>
                                      {/* Hexagonal Background */}
                    <div className="relative w-full h-80">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500" />
                      
                      {/* Main Card Content */}
                      <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-2xl group-hover:shadow-slate-500/30 transition-all duration-500 overflow-hidden">
                      
                                              {/* Animated Background Pattern */}
                        <motion.div
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #475569 2px, transparent 2px),
                                            radial-gradient(circle at 75% 75%, #475569 2px, transparent 2px)`,
                            backgroundSize: '20px 20px'
                          }}
                        />
                        
                        {/* Floating Elements */}
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                            x: [0, 8, 0],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut"
                          }}
                          className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full shadow-sm opacity-60"
                        />
                        <motion.div
                          animate={{
                            y: [0, 15, 0],
                            x: [0, -8, 0],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: index * 0.7,
                            ease: "easeInOut"
                          }}
                          className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full shadow-sm opacity-60"
                        />
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Project Header with Enhanced Icon */}
                        <div className="flex items-center space-x-4 mb-6">
                          <motion.div 
                            className="relative w-16 h-16 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-300"
                            whileHover={{
                              rotate: [0, 15, -15, 0],
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.3,
                                ease: "easeInOut"
                              }}
                            >
                              <Lightbulb className="h-8 w-8 text-white" />
                            </motion.div>
                            
                            {/* Enhanced Glow Effect */}
                            <motion.div
                              animate={{
                                opacity: [0.4, 0.9, 0.4],
                                scale: [1, 1.3, 1],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-2xl blur-xl opacity-20"
                            />
                            
                            {/* Orbiting Dots */}
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute inset-0"
                            >
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-300 rounded-full" />
                              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-300 rounded-full" />
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-slate-400 rounded-full" />
                            </motion.div>
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors duration-300 mb-2">
                              {project.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <motion.div
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                  ease: "easeInOut"
                                }}
                                className="w-2 h-2 bg-slate-400 rounded-full"
                              />
                              <span className="text-xs text-slate-600 font-mono font-semibold">LIVE PROJECT</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>
                        
                        {/* Technologies with Enhanced Design */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  scale: 1.05, 
                                  y: -2,
                                  rotate: [0, 2, -2, 0]
                                }}
                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:from-slate-100 hover:to-slate-200 hover:shadow-md hover:shadow-slate-200/30 transition-all duration-300 cursor-pointer"
                              >
                                <motion.div
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: techIndex * 0.2,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Code className="w-3 h-3 mr-1.5" />
                                </motion.div>
                                {tech}
                              </motion.span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="inline-flex items-center px-3 py-1.5 bg-slate-200 text-slate-700 text-xs rounded-full border border-slate-300">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Key Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                              <motion.li 
                                key={highlightIndex} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 text-xs text-slate-600"
                              >
                                <motion.div
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: highlightIndex * 0.3,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Star className="w-3 h-3 text-slate-500 flex-shrink-0" />
                                </motion.div>
                                <span className="line-clamp-1">{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Project Link with Animation */}
                        <div className="flex items-center justify-between mt-auto">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                              ease: "easeInOut"
                            }}
                            className="w-3 h-3 bg-slate-400 rounded-full"
                          />
                          
                          <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-center text-slate-600 text-sm font-semibold hover:text-slate-700 transition-colors duration-300"
                          >
                            <span>View Project</span>
                            <motion.div
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="ml-2"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative w-24 h-24">
                {/* Main Award Icon */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <ShieldCheck className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  {/* Inner Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"
                  />
                </motion.div>
                
                {/* Certification Badges - Floating Around */}
                <motion.div
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {/* Badge 1 - Top */}
                  <motion.div
                    animate={{
                      scale: [0.7, 1.1, 0.7],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg border-2 border-white" />
                  </motion.div>
                  
                  {/* Badge 2 - Right */}
                  <motion.div
                    animate={{
                      scale: [1.1, 0.8, 1.1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg border-2 border-white" />
                  </motion.div>
                  
                  {/* Badge 3 - Bottom */}
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg border-2 border-white" />
                  </motion.div>
                  
                  {/* Badge 4 - Left */}
                  <motion.div
                    animate={{
                      scale: [1.2, 0.9, 1.2],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg border-2 border-white" />
                  </motion.div>
                </motion.div>
                
                {/* Success Rings - Expanding */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 border-2 border-purple-400/40 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 3
                  }}
                  className="absolute inset-0 border border-pink-400/30 rounded-full"
                />
              </div>
            </motion.div>
            
            <div className="h-8"></div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 relative z-10 bg-white/90 px-4 py-2 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899, #8b5cf6, #f472b6)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                delay: 0.2,
                duration: 0.8
              }}
            >
              Professional Certifications
            </motion.h2>
            
            <motion.p 
              className="text-xl text-purple-700 max-w-4xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Industry-recognized credentials that validate expertise and commitment to excellence
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(cert, 'certification')}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 shadow-lg h-full flex flex-col group-hover:scale-[1.02]">
                  <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl mb-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110"
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      <cert.icon className="h-10 w-10 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cert.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-4 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600 text-sm font-mono bg-purple-100 px-3 py-1 rounded">
                        {cert.credential}
                      </span>
                      <motion.div
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-purple-400 group-hover:text-purple-600 transition-colors duration-300"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Social Media Posts Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center">
                  <Globe className="h-12 w-12 text-white" />
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full" />
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                background: "linear-gradient(135deg, #1e40af, #3730a3, #7c3aed, #ec4899)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                delay: 0.2,
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Social Media Presence
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sharing insights, tutorials, and thoughts on technology and development
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* LinkedIn Overview Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
              onClick={() => handleCardClick({ type: 'linkedin', posts: socialMediaPosts.filter(p => p.platform === 'LinkedIn') }, 'social')}
            >
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 shadow-lg overflow-hidden h-full">
                
                {/* Animated Background */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/15 to-purple-100/15 rounded-3xl"
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-sm opacity-60"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300"
                      whileHover={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Linkedin className="h-8 w-8 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                        LinkedIn Posts
                      </h3>
                      <p className="text-blue-600 font-semibold mb-1">Professional Network</p>
                      <p className="text-gray-500 text-sm">Thought Leadership & Industry Insights</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                      <h4 className="font-semibold text-gray-800 mb-2">Recent Content</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>AI in Modern Web Development</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Building Scalable Systems</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Career Growth in Tech</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 text-sm font-medium">6 LinkedIn Posts</span>
                      <motion.div
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* YouTube Overview Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
              onClick={() => handleCardClick({ type: 'youtube', posts: socialMediaPosts.filter(p => p.platform === 'YouTube') }, 'social')}
            >
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:border-red-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 shadow-lg overflow-hidden h-full">
                
                {/* Animated Background */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-pink-100/15 to-orange-100/15 rounded-3xl"
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full shadow-sm opacity-60"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Play className="h-8 w-8 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300 mb-2">
                        YouTube Channel
                      </h3>
                      <p className="text-red-600 font-semibold mb-1">Tech Tutorials & Insights</p>
                      <p className="text-gray-500 text-sm">Video Content & Live Coding</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200/50">
                      <h4 className="font-semibold text-gray-800 mb-2">Popular Videos</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>React Performance Optimization</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Full-Stack Development Guide</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>AI Integration Tutorials</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 text-sm font-medium">6 YouTube Videos</span>
                      <motion.div
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-red-500 group-hover:text-red-600 transition-colors duration-300"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Creative Contact Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12">
                  <MessageSquare className="h-12 w-12 text-white" />
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-2 border-2 border-purple-400/30 rounded-2xl transform -rotate-6"
                />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #1f2937, #7c3aed, #ec4899, #1f2937)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Get in Touch
            </motion.h2>
            

          </motion.div>

          {/* Interactive Contact Flow */}
          <div className="relative">
            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative mx-auto w-32 h-32 mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Users className="h-12 w-12 text-purple-600" />
                </motion.div>
              </div>
              
              {/* Orbiting Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                {[
                  { icon: Mail, color: "from-blue-500 to-cyan-500", delay: 0, action: () => window.open(`mailto:${personalInfo.email}`, '_blank') },
                  { icon: Linkedin, color: "from-purple-500 to-pink-500", delay: 0.5, action: () => window.open(`https://${personalInfo.linkedin}`, '_blank') },
                  { icon: Github, color: "from-green-500 to-emerald-500", delay: 1, action: () => window.open(`https://${personalInfo.github}`, '_blank') },
                  { icon: Globe, color: "from-orange-500 to-red-500", delay: 1.5, action: () => window.open(`https://${personalInfo.website}`, '_blank') }
                ].map((item, _index) => (
                  <motion.div
                    key={_index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: item.delay }}
                    viewport={{ once: true }}
                    className="absolute w-16 h-16 cursor-pointer group"
                    style={{
                      top: `${Math.cos(_index * Math.PI / 2) * 80 + 64}px`,
                      left: `${Math.sin(_index * Math.PI / 2) * 80 + 64}px`,
                    }}
                    onClick={item.action}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-full h-full bg-gradient-to-r ${item.color} rounded-full shadow-lg flex items-center justify-center group-hover:shadow-2xl transition-all duration-300`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Connection Line */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: _index * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 border border-purple-300/50 rounded-full"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

                        {/* Sticky Floating Contact Panel - Top Right Corner */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="fixed top-6 right-6 z-50"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: -5 }}
                className="bg-white/95 backdrop-blur-md border border-purple-200/40 rounded-2xl p-5 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                {/* Central Hub */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Orbiting Contact Icons */}
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: personalInfo.email,
                      gradient: "from-blue-500 to-cyan-500",
                      angle: 0,
                      delay: 0.1
                    },
                    {
                      icon: Linkedin,
                      title: "LinkedIn",
                      value: personalInfo.linkedin,
                      gradient: "from-purple-500 to-pink-500",
                      angle: 120,
                      delay: 0.2
                    },
                    {
                      icon: Github,
                      title: "GitHub",
                      value: personalInfo.github,
                      gradient: "from-green-500 to-emerald-500",
                      angle: 240,
                      delay: 0.3
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: item.delay }}
                      viewport={{ once: true }}
                      className="absolute w-12 h-12 cursor-pointer group"
                      style={{
                        top: `${Math.cos((item.angle * Math.PI) / 180) * 70 + 96}px`,
                        left: `${Math.sin((item.angle * Math.PI) / 180) * 70 + 96}px`,
                      }}
                      onClick={() => {
                        if (item.title === "Email") {
                          window.open(`mailto:${item.value}`, '_blank');
                        } else {
                          window.open(`https://${item.value}`, '_blank');
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className={`w-full h-full bg-gradient-to-r ${item.gradient} rounded-full shadow-2xl flex items-center justify-center group-hover:shadow-purple-500/30 transition-all duration-500`}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        
                        {/* Glow Effect */}
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut"
                          }}
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-xl opacity-30`}
                        />
                      </motion.div>
                      
                      {/* Connection Line to Center */}
                      <motion.div
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 border border-purple-300/50 rounded-full"
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Central Users Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl flex items-center justify-center relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Users className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Central Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Compact Contact Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {/* Email Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full px-6 py-3 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
                  />
                  
                                     <div className="relative z-10 flex items-center space-x-3">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Mail className="h-5 w-5 text-white" />
                     </motion.div>
                     <span className="text-white font-medium text-sm whitespace-nowrap">Email</span>
                   </div>
                </div>
              </motion.div>

              {/* Phone Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full px-6 py-3 shadow-lg hover:shadow-green-500/30 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20"
                  />
                  
                                     <div className="relative z-10 flex items-center space-x-3">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Phone className="h-5 w-5 text-white" />
                     </motion.div>
                     <span className="text-white font-medium text-sm whitespace-nowrap">Call</span>
                   </div>
                </div>
              </motion.div>

              {/* Location Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`, '_blank')}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full px-6 py-3 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
                  />
                  
                                     <div className="relative z-10 flex items-center space-x-3">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <MapPin className="h-5 w-5 text-white" />
                     </motion.div>
                     <span className="text-white font-medium text-sm whitespace-nowrap">Location</span>
                   </div>
                </div>
              </motion.div>

              {/* Website Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://${personalInfo.website}`, '_blank')}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6 py-3 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20"
                  />
                  
                                     <div className="relative z-10 flex items-center space-x-3">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Globe className="h-5 w-5 text-white" />
                     </motion.div>
                     <span className="text-white font-medium text-sm whitespace-nowrap">Website</span>
                   </div>
                </div>
              </motion.div>

              {/* Download Profile Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-full px-6 py-3 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20"
                  />
                  
                                     <div className="relative z-10 flex items-center space-x-3">
                     <motion.div
                       animate={{
                         scale: [1, 1.1, 1],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Download className="h-5 w-5 text-white" />
                     </motion.div>
                     <span className="text-white font-medium text-sm whitespace-nowrap">Profile</span>
                   </div>
                </div>
              </motion.div>
            </motion.div>

                         {/* Contact Details Display */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.5 }}
               viewport={{ once: true }}
               className="mt-8 text-center"
             >
               <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl px-6 py-3 shadow-lg">
                 <div className="flex items-center space-x-2">
                   <Mail className="h-3 w-3 text-blue-600" />
                   <span className="text-xs text-gray-700 font-mono">{personalInfo.email}</span>
                 </div>
                 <div className="w-px h-4 bg-gray-300"></div>
                 <div className="flex items-center space-x-2">
                   <Phone className="h-3 w-3 text-green-600" />
                   <span className="text-xs text-gray-700 font-mono">{personalInfo.phone}</span>
                 </div>
                 <div className="w-px h-4 bg-gray-300"></div>
                 <div className="flex items-center space-x-2">
                   <MapPin className="h-3 w-3 text-purple-600" />
                   <span className="text-xs text-gray-700 font-mono">{personalInfo.location}</span>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>



      {/* Compact Modern Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-8 h-8 border border-purple-300/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-16 w-6 h-6 border border-pink-300/30 rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Compact Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative mr-3">
              {/* Main Logo Container */}
              <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-110">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-xl" />
                
                {/* Central Code Icon */}
                <div className="relative z-10">
                  <Code className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                
                {/* Animated Code Lines - Typing Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '1s', animationDelay: '0s' }} />
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '1s', animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '1s', animationDelay: '0.4s' }} />
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/60 rounded-tl" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/60 rounded-tr" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/60 rounded-bl" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/60 rounded-br" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-indigo-400/30 rounded-xl blur-lg opacity-60" />
              </div>
              
              {/* Animated Code Snippets - Moving Lines */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0s' }} />
                <div className="w-1 h-2 bg-pink-400 rounded-full animate-bounce mt-1" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
                <div className="w-1 h-2.5 bg-indigo-400 rounded-full mt-1" style={{ animationDuration: '1.5s', animationDelay: '1s' }} />
              </div>
              
              {/* Animated Success Ring */}
              <div className="absolute inset-0 border border-green-400/40 rounded-xl animate-ping" style={{ animationDuration: '2s' }} />
              
              {/* Processing/Loading Bubbles */}
              <div className="absolute -top-1 -left-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: '1s', animationDelay: '0s' }} />
              </div>
              <div className="absolute -top-1 -right-1">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: '1s', animationDelay: '0.3s' }} />
              </div>
              <div className="absolute -bottom-1 -left-1">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDuration: '1s', animationDelay: '0.6s' }} />
              </div>
              <div className="absolute -bottom-1 -right-1">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDuration: '1s', animationDelay: '0.9s' }} />
              </div>
              
              {/* Processing Status Indicator */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0s' }} />
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />
              </div>
            </div>
            
            {/* Compact Name with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Dhruvish Patel
              </h2>
            </motion.div>
          </div>
          
          {/* Compact Copyright with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 bg-green-400 rounded-full"
              />
              <span className="text-sm text-gray-700 font-medium">
                &copy; 2025 Dhruvish Patel. Software Developer & AI Enthusiast.
              </span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedModal && (
          <div>
            {selectedModal.type === 'experience' && (
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedModal.data.position}</h4>
                <p className="text-purple-600 font-medium mb-2">{selectedModal.data.company}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{selectedModal.data.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedModal.data.location}</span>
                </div>
                <ul className="space-y-2">
                  {selectedModal.data.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedModal.type === 'project' && (
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedModal.data.name}</h4>
                <p className="text-gray-600 mb-4">{selectedModal.data.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedModal.data.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Key Highlights</h5>
                  <ul className="space-y-1">
                    {selectedModal.data.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={`https://${selectedModal.data.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                >
                  <span>View Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}

            {selectedModal.type === 'certification' && (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <selectedModal.data.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{selectedModal.data.name}</h4>
                    <p className="text-purple-600 font-medium">{selectedModal.data.issuer}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 font-medium">Issue Date</span>
                    </div>
                    <span className="text-purple-600 font-semibold">{selectedModal.data.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Key className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700 font-medium">Credential ID</span>
                    </div>
                    <span className="text-pink-600 font-mono font-semibold">{selectedModal.data.credential}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                  <h5 className="font-semibold text-gray-800 mb-2">About This Certification</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This industry-recognized certification validates expertise in {selectedModal.data.name.toLowerCase()} 
                    and demonstrates commitment to professional development and excellence in the field.
                  </p>
                </div>
              </div>
            )}

            {selectedModal.type === 'skill' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedModal.data.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <selectedModal.data.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{selectedModal.data.title}</h4>
                    <p className="text-gray-600">{selectedModal.data.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                    <h5 className="font-semibold text-gray-800 mb-3">Technical Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedModal.data.skills.map((skill: string, index: number) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="inline-flex items-center px-3 py-2 bg-white text-purple-700 text-sm font-medium rounded-full border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          <span>{skill}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                    <h5 className="font-semibold text-gray-800 mb-2">Expertise Level</h5>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">85%</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Advanced proficiency with hands-on experience in real-world projects
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                    <h5 className="font-semibold text-gray-800 mb-2">Career Impact</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Enables rapid development of scalable applications</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Drives innovation through cutting-edge technologies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Delivers high-quality, maintainable code solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedModal.type === 'social' && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    selectedModal.data.type === 'linkedin' 
                      ? 'from-blue-500 to-indigo-500' 
                      : 'from-red-500 to-pink-500'
                  } rounded-2xl flex items-center justify-center shadow-lg`}>
                    {selectedModal.data.type === 'linkedin' ? (
                      <Linkedin className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {selectedModal.data.type === 'linkedin' ? 'LinkedIn Posts' : 'YouTube Videos'}
                    </h4>
                    <p className="text-gray-600">
                      {selectedModal.data.type === 'linkedin' ? 'Professional Network' : 'Tech Tutorials & Insights'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {selectedModal.data.posts.length} {selectedModal.data.type === 'linkedin' ? 'Posts' : 'Videos'}
                    </p>
                  </div>
                </div>
                
                {/* Beautiful Posts List */}
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {selectedModal.data.posts.map((post: any, index: number) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                        selectedModal.data.type === 'linkedin'
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50 hover:border-blue-300/50'
                          : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200/50 hover:border-red-300/50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${post.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <post.icon className="h-5 w-5 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                            {post.title}
                          </h5>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                            {post.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                              <span
                                key={tagIndex}
                                className={`px-2 py-1 text-xs rounded-full border ${
                                  selectedModal.data.type === 'linkedin'
                                    ? 'bg-blue-100 text-blue-700 border-blue-200'
                                    : 'bg-red-100 text-red-700 border-red-200'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{post.engagement}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Summary Stats */}
                <div className={`mt-6 p-4 rounded-xl border ${
                  selectedModal.data.type === 'linkedin'
                    ? 'bg-gradient-to-r from-blue-100/50 to-indigo-100/50 border-blue-200/50'
                    : 'bg-gradient-to-r from-red-100/50 to-pink-100/50 border-red-200/50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Total Content</h5>
                      <p className={`font-bold ${
                        selectedModal.data.type === 'linkedin' ? 'text-blue-600' : 'text-red-600'
                      }`}>
                        {selectedModal.data.posts.length} {selectedModal.data.type === 'linkedin' ? 'Posts' : 'Videos'}
                      </p>
                    </div>
                    <div className="text-right">
                      <h5 className="font-semibold text-gray-800 mb-1">Platform</h5>
                      <p className={`font-bold ${
                        selectedModal.data.type === 'linkedin' ? 'text-blue-600' : 'text-red-600'
                      }`}>
                        {selectedModal.data.type === 'linkedin' ? 'LinkedIn' : 'YouTube'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Profile
