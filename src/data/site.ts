export interface SiteConfig {
  // Basic Info
  name: string;
  title: string;
  role: string;
  bio: {
    short: string;
    long: string;
  };
  headshot: string;
  
  // Contact
  location: string;
  email: string;
  phone?: string;
  
  // Social Links
  social: {
    linkedin: string;
    github: string;
    twitter?: string;
    instagram?: string;
  };
  
  // Resume & CTAs
  resumeUrl: string;
  cta: {
    primary: string;
    secondary: string;
  };
  
  // Skills & Tools
  skills: {
    technical: string[];
    tools: string[];
    certifications: Array<{
      name: string;
      logo: string;
    }>;
  };
  
  // Projects
  projects: Array<{
    title: string;
    oneLiner: string;
    description: string;
    tags: string[];
    links: {
      repo?: string;
      demo?: string;
    };
    image?: string;
    impact?: string;
  }>;
  
  // Experience
  experience: Array<{
    company: string;
    role: string;
    period: string;
    bullets: string[];
    logo: string;
  }>;
  
  // Education
  education: Array<{
    school: string;
    degree: string;
    period: string;
    details?: string[];
  }>;
  
  // Awards/Press/Speaking (optional)
  achievements?: Array<{
    title: string;
    detail: string;
    year?: string;
  }>;
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    favicon: string;
  };
}

export const siteConfig: SiteConfig = {
  // Basic Info
  name: "Sanjana Onteru",
  title: "Staff ML Engineer | AI/ML Systems",
  role: "Staff Machine Learning Engineer",
  bio: {
    short: "Machine Learning Engineer specializing in real-time ML pipelines and MLOps infrastructure",
    long: "Experienced ML Engineer with a proven track record of building production ML systems at scale. I specialize in real-time anomaly detection, MLOps infrastructure, and automated data pipelines. My expertise spans from conversational AI at Lore Health to financial analytics at Barclays, where I've delivered measurable business impact through data-driven solutions."
  },
  headshot: "/avatar.jpg",
  
  // Contact
  location: "Jersey City, NJ",
  email: "sanjanaonteru1@gmail.com", // Updated with real email
  phone: undefined, // TODO: Add if desired
  
  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/onteru/",
    github: "https://github.com/Sonteru4",
    twitter: undefined, // TODO: Add if desired
    instagram: undefined, // TODO: Add if desired
  },
  
  // Resume & CTAs
  resumeUrl: "/Sanjana_Onteru_Resume.pdf", // Updated to existing resume file
  cta: {
    primary: "Download Resume",
    secondary: "Contact"
  },
  
  // Skills & Tools
  skills: {
    technical: [
      "Machine Learning",
      "MLOps",
      "Natural Language Processing",
      "Real-time Analytics",
      "Data Engineering",
      "Python",
      "PySpark",
      "SQL",
      "AWS",
      "GCP",
      "Azure"
    ],
    tools: [
      "Terraform",
      "n8n",
      "Tableau",
      "Power BI",
      "Docker",
      "GitHub Actions",
      "TeamsBot",
      "Oracle",
      "AWS S3",
      "Apache Airflow"
    ],
    certifications: [
      {
        name: "AWS Certified AI Practitioner",
        logo: "/src/assets/logos/aws.png"
      },
      {
        name: "AWS Machine Learning – Associate",
        logo: "/src/assets/logos/aws.png"
      },
      {
        name: "Tableau Data Analyst",
        logo: "/src/assets/logos/tableau.png"
      }
    ]
  },
  
  // Projects
  projects: [
    {
      title: "Profanity Monitoring Dashboard",
      oneLiner: "AWS Contact Lens + Bedrock | Risk & QA Analytics",
      description: "End-to-end pipeline analyzing contact-center transcripts for profanity with false-positive suppression and executive dashboards. Reduced false positives from ~5,000 to ~50 per month through 6 UAT rounds and refined ML model tuning.",
      tags: ["AWS", "Bedrock", "SageMaker", "NLP", "Dashboards", "Python"],
      links: {
        repo: "https://github.com/Sonteru4/profanity-monitoring", // TODO: Update with real repo
        demo: "#" // TODO: Add demo link if available
      },
      impact: "Analyzed 1.5M+ customer calls monthly, reduced false positives by 20%+, deployed for COO oversight with 100+ senior stakeholders using the system"
    },
    {
      title: "Engine Lab TeamsBot",
      oneLiner: "Teams + n8n + Terraform + GitHub automations",
      description: "Internal assistant that automates IAM/DB access flows, infra requests, and GitHub ops; reduced manual tickets and cycle time. Built with n8n orchestration across GCP/Azure.",
      tags: ["Python", "Terraform", "n8n", "GitHub", "Azure/GCP", "Automation"],
      links: {
        demo: "#" // Internal project - no public demo
      },
      impact: "Cut pipeline setup time from hours to minutes, reduced infra bottlenecks, automated IAM and resource requests via APIs"
    },
    {
      title: "Real-time ML Pipeline for Anomaly Detection",
      oneLiner: "Conversational anomaly detection with <200ms latency",
      description: "Productionized real-time ML pipelines in Python for conversational anomaly detection, streaming 50K+ messages daily to monitor sentiment shifts, topic spikes, and atypical behaviors.",
      tags: ["Python", "MLOps", "Real-time", "NLP", "Anomaly Detection", "GCP"],
      links: {
        repo: "https://github.com/Sonteru4/anomaly-detection" // TODO: Update with real repo
      },
      impact: "Boosted anomaly detection precision by ~12%, ran 200+ fine-tuning experiments, enabled reliable research-to-production deployments"
    }
  ],
  
  // Experience
  experience: [
    {
      company: "Lore Health",
      role: "Machine Learning Engineer | Engine Lab Squad",
      period: "July 2025 — Present",
      logo: "/src/assets/logos/lore-health.png",
      bullets: [
        "Designed and productionized real-time ML pipelines in Python for conversational anomaly detection, streaming 50K+ messages daily with <200ms latency to monitor sentiment shifts, topic spikes, and atypical behaviors",
        "Built MLOps foundations with CI/CD for models and services, feature store patterns, observability, and runbooks, enabling reliable research-to-production deployments",
        "Developed synthetic datasets and ran 200+ fine-tuning experiments to validate conversational models, boosting anomaly detection precision by ~12% and accelerating iteration cycles",
        "Partnered with Compliance, Data, and Research squads to implement model guardrails, approval flows, and incident response procedures, ensuring zero high-risk production escalations post-launch",
        "Launched TeamsBot + n8n orchestration across GCP/Azure to automate IAM and resource requests via APIs, cutting pipeline setup time from hours to minutes and reducing infra bottlenecks"
      ]
    },
    {
      company: "Barclays Bank",
      role: "Data Insights Analyst, Project Lead | US Consumer Bank",
      period: "Dec 2021 — Jun 2025",
      logo: "/src/assets/logos/barclays.png",
      bullets: [
        "Built and deployed forecasting models (Python, PySpark, AWS) that informed business strategy, delivering measurable revenue gains and cost reductions for operations",
        "Engineered automated QA pipelines in Python/NLP to analyze 1.5M+ customer calls monthly, reducing false positives in profanity detection by 20%+ and improving compliance accuracy",
        "Led the Quality Assurance Automation program, transitioning static reports into real-time Tableau dashboards and deploying the Agents Profanity Monitoring ML model into production for COO oversight",
        "Directed 6 UAT rounds to retune, validate, and test anomaly data; refined definitions of profane words and call states (on-hold vs. active). Reduced false positives from ~5,000 to ~50 per month",
        "Designed and implemented end-to-end ML pipelines for banking use cases in strategy, marketing, and product",
        "Applied statistical and machine learning models to size opportunities and optimize targeting, directly reducing call reasons and informing executive decisions",
        "Analyzed behavioral data (SQL, Python) to uncover customer engagement patterns, driving 10%+ lift in retention initiatives",
        "Delivered data products at scale: Tableau dashboards, automated Daily Issues reports, and model-driven recommendations used by 100+ senior stakeholders",
        "Integrated multimodal datasets (Oracle, AWS S3, call transcripts, clickstream logs) to build custom executive reports and identify drop-off points where digital journeys triggered agent calls, cutting unnecessary transfers by ~8%"
      ]
    },
    {
      company: "Caterpillar",
      role: "Business Analytics Intern",
      period: "Jun 2020 — Sep 2020",
      logo: "/src/assets/logos/caterpillar.png",
      bullets: [
        "Delivered B2B and B2C migration strategy by analyzing consumer behavior and designing an adoption roadmap, leveraging Power BI to deliver actionable insights"
      ]
    }
  ],
  
  // Education
  education: [
    {
      school: "Pennsylvania State University",
      degree: "Masters, Business Analytics",
      period: "Aug 2019 — Aug 2021",
      details: ["Master in Professional Studies, Management and Organizational Leadership", "Focus: Data Analytics, Business Intelligence, Statistical Modeling"]
    },
    {
      school: "SRM University, Institute of Science and Technology",
      degree: "Bachelor of Technology, Information and Telecommunication Engineering",
      period: "Aug 2014 — Aug 2018",
      details: ["Focus: Information Technology, Telecommunications", "Engineering Foundation in Data Systems"]
    }
  ],
  
  // Achievements (optional)
  achievements: [
    {
      title: "AWS Certified AI Practitioner",
      detail: "Certified in AI/ML best practices and AWS services",
      year: "2024"
    },
    {
      title: "Tableau Data Analyst",
      detail: "Advanced data visualization and dashboard creation",
      year: "2020"
    }
  ],
  
  // SEO
  seo: {
    title: "Sanjana Onteru - Staff ML Engineer | AI/ML Systems",
    description: "Staff Machine Learning Engineer specializing in AI/ML systems, data engineering, and production ML pipelines. Based in Jersey City, NJ.",
    keywords: [
      "Machine Learning Engineer",
      "AI Engineer", 
      "Data Scientist",
      "ML Systems",
      "Python",
      "AWS",
      "TensorFlow",
      "PyTorch",
      "Data Engineering",
      "Jersey City"
    ],
    ogImage: "/og.jpg", // TODO: Generate OG image
    favicon: "/favicon.ico"
  }
};
