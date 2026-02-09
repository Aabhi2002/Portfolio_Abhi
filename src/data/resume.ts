import { Resume } from '@/types';

export const resume: Resume = {
  personalInfo: {
    name: 'Abhishek Rajput',
    role: 'Full Stack Developer • Generative AI Engineer',
    intro: 'Building scalable AI-powered applications, automation systems, and intelligent backend architectures that solve real-world problems. Generative AI Engineer and Full Stack Developer based in Bangalore, specializing in AI-driven systems, RAG pipelines, and LLM integrations. Experienced in building production-ready AI solutions, automation workflows, and scalable backend architectures. Passionate about combining AI with real-world business use cases like healthcare, lead automation, and conversational systems.',
    location: 'Bangalore, India',
    email: 'abhishekrajput90094@gmail.com',
    linkedin: 'linkedin.com/in/abhishekrajput0007',
    github: 'github.com/Aabhi2002',
  },
  experience: [
    {
      company: 'NuShift Technology',
      role: 'Generative AI Engineer',
      duration: 'November 2024 - Present',
      achievements: [
        'Developing AI-driven healthcare systems for intelligent question understanding and routing',
        'Designing RAG pipelines with vector databases for high-accuracy semantic search',
        'Built medical Q&A routing system to match queries with relevant specialists',
        'Integrated LLMs, embeddings, and backend APIs for context-aware responses',
        'Collaborating with product & engineering teams on production AI features',
      ],
      technologies: [
        'Python',
        'LangChain',
        'RAG Systems',
        'Vector Databases',
        'LLM Integration',
        'FastAPI',
        'Healthcare AI',
        'Semantic Search',
      ],
    },
  ],
  skills: [
    // AI & Automation
    { name: 'Generative AI & LLMs', category: 'AI & Automation' },
    { name: 'RAG Systems', category: 'AI & Automation' },
    { name: 'LangChain', category: 'AI & Automation' },
    { name: 'Vector Databases', category: 'AI & Automation' },
    { name: 'LLM Integration', category: 'AI & Automation' },
    { name: 'AI Workflow Automation', category: 'AI & Automation' },
    { name: 'AI Agents', category: 'AI & Automation' },
    { name: 'FastAPI', category: 'AI & Automation' },
    { name: 'Hugging Face', category: 'AI & Automation' },
    { name: 'Ollama', category: 'AI & Automation' },
    { name: 'Automation & Workflow Engineering (n8n)', category: 'AI & Automation' },

    // Backend
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Spring Security', category: 'Backend' },
    { name: 'Hibernate JPA', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Microservices', category: 'Backend' },

    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },

    // Database
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Supabase', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Data Modeling', category: 'Database' },

    // DevOps
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git', category: 'DevOps' },
    { name: 'GitHub', category: 'DevOps' },
    { name: 'Linux', category: 'DevOps' },
    { name: 'CI/CD', category: 'DevOps' },
  ],
  projects: [
    {
      name: 'AI Lead Automation Platform',
      description: 'AI-powered platform to automate lead ingestion, enrichment, and scoring. Built using Python, FastAPI, and React. Automated enrichment and predictive lead scoring workflows. Real-time analytics dashboards for conversion tracking. Integrated LLM APIs and MCP for intelligent insights. Modular, enterprise-ready backend architecture.',
      technologies: ['Python', 'FastAPI', 'React', 'LLM APIs', 'MCP', 'Analytics'],
      links: {},
    },
    {
      name: 'AI Voice Calling Agent',
      description: 'Automated AI voice agent for real estate lead qualification. Automated outbound calls via n8n and VAPI. AI conversations to capture intent (budget, location, timeline). Auto-updated Google Sheets with call data & scores. Gmail alerts for high-quality leads.',
      technologies: ['n8n', 'VAPI', 'AI Voice', 'Google Sheets', 'Gmail API', 'Lead Qualification'],
      links: {},
    },
    {
      name: 'Slack Clone with AI Features',
      description: 'Real-time collaboration platform with applied GenAI use cases. Real-time messaging, channels, DMs, reactions. AI Suggest Reply. Org Brain knowledge Q&A. Tone analysis for sentiment detection. AI-generated meeting notes. Built with React + Supabase + LLM backend.',
      technologies: ['React', 'Supabase', 'LLM', 'WebSockets', 'AI Features', 'Real-time'],
      links: {},
    },
    {
      name: 'Quiz Management System',
      description: 'Microservices-based distributed quiz platform. Spring Boot microservices architecture. Eureka service discovery. API Gateway with load balancing. OpenFeign inter-service communication.',
      technologies: ['Spring Boot', 'Microservices', 'Eureka', 'API Gateway', 'OpenFeign', 'Java'],
      links: {},
    },
    {
      name: 'AI Appointment Booking Workflow',
      description: 'AI chatbot for automated appointment scheduling. Chat-based AI booking system. Airtable as live DB. Google Calendar automation. Context-aware AI memory.',
      technologies: ['AI Chatbot', 'Airtable', 'Google Calendar', 'Context Memory', 'Automation'],
      links: {},
    },
    {
      name: 'JWT Authentication System',
      description: 'Secure authentication & authorization system. JWT auth with Spring Security. BCrypt password encryption. Role-based authorization. Custom filters & token validation.',
      technologies: ['Spring Security', 'JWT', 'BCrypt', 'Java', 'Authentication', 'Authorization'],
      links: {},
    },
  ],
  automationProjects: [
    {
      name: 'AI Workflow Automation System (n8n + LLMs)',
      description: 'Designed and implemented an AI-driven automation system using n8n that processes incoming data, applies LLM-based reasoning, and triggers automated actions across tools and databases.',
      technologies: ['n8n', 'LLMs', 'API Integration', 'Webhooks', 'Database Automation'],
      achievements: [
        'Built multiple workflow automation pipelines using n8n, integrating APIs, databases, and AI services',
        'Developed AI-powered automations for email handling, lead qualification, intelligent query routing, and content summarization',
        'Designed workflows using webhooks, conditional logic, cron jobs, and third-party integrations',
        'Focused on reducing manual processes and improving operational efficiency through automation',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dayananda Sagar University',
      duration: '2023 - 2025',
      cgpa: '7.96',
    },
  ],
};