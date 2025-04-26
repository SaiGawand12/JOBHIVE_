import { JobPosting } from "../types/job";

// Mock job data
const mockJobs: JobPosting[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: {
      id: "c1",
      name: "TechCorp Solutions",
      logo: "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?ga=GA1.1.1670610770.1743225807&semt=ais_hybrid&w=740",
      industry: "Information Technology",
    },
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
      remote: true,
    },
    description: "We're looking for a skilled Senior Frontend Developer who can lead our frontend team in building responsive, elegant web applications. You'll work closely with our product and design teams to create user-friendly interfaces.",
    requirements: [
      "5+ years of experience with React, Vue, or Angular",
      "Strong understanding of TypeScript",
      "Experience with state management (Redux, MobX, etc.)",
      "Knowledge of modern CSS frameworks like Tailwind CSS",
      "Experience with responsive design and cross-browser compatibility",
    ],
    salary: {
      min: 120000,
      max: 160000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "senior",
    postedDate: "2025-03-10",
    deadline: "2025-05-01",
    featured: true,
    applications: 12,
    tags: ["React", "TypeScript", "Frontend", "Remote"],
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: {
      id: "c2",
      name: "Creative Minds Agency",
      logo: "https://img.freepik.com/premium-psd/white-paper-punched-logo-mockup_1816-77.jpg?ga=GA1.1.1670610770.1743225807&semt=ais_hybrid&w=740",
      industry: "Creative Agency",
    },
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
      remote: false,
    },
    description: "Join our design team and help create beautiful, intuitive interfaces for our clients. You'll be involved in the full design process from research to final implementation.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showing UI design skills",
      "Knowledge of design systems and component libraries",
      "Understanding of accessibility standards",
    ],
    salary: {
      min: 85000,
      max: 110000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "mid-level",
    postedDate: "2025-03-15",
    featured: false,
    applications: 8,
    tags: ["Design", "UX", "UI", "Figma"],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: {
      id: "c3",
      name: "Innovate Inc.",
      logo: "https://img.freepik.com/free-vector/editable-spa-business-logo-vector-with-balance-text_53876-110944.jpg?ga=GA1.1.1670610770.1743225807&semt=ais_hybrid&w=740",
      industry: "Software Development",
    },
    location: {
      city: "Austin",
      state: "TX",
      country: "USA",
      remote: true,
    },
    description: "We're seeking a talented Full Stack Developer to join our growing team. You'll be working on challenging projects, implementing new features, and maintaining existing code.",
    requirements: [
      "4+ years of experience in full stack development",
      "Proficiency in JavaScript/TypeScript, React, and Node.js",
      "Experience with databases (SQL and NoSQL)",
      "Knowledge of Git and CI/CD pipelines",
      "Good understanding of security best practices",
    ],
    salary: {
      min: 100000,
      max: 130000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "mid-level",
    postedDate: "2025-03-20",
    deadline: "2025-04-30",
    featured: true,
    applications: 15,
    tags: ["Full Stack", "React", "Node.js", "Remote"],
  },
  {
    id: "4",
    title: "Data Scientist",
    company: {
      id: "c4",
      name: "Data Insights Pro",
      logo: "https://dypdvfcjkqkg2.cloudfront.net/large/5965767-5915.jpg",
      industry: "Data Analytics",
    },
    location: {
      city: "Boston",
      state: "MA",
      country: "USA",
      remote: false,
    },
    description: "Join our data science team to analyze complex datasets and provide valuable insights to our clients. You'll be using machine learning models to solve real-world problems.",
    requirements: [
      "Master's degree in Statistics, Computer Science, or related field",
      "Experience with Python, R, and machine learning libraries",
      "Knowledge of SQL and data visualization tools",
      "Strong analytical and problem-solving skills",
      "Good communication skills to explain technical concepts",
    ],
    salary: {
      min: 110000,
      max: 140000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "mid-level",
    postedDate: "2025-03-22",
    featured: false,
    applications: 7,
    tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: {
      id: "c5",
      name: "CloudTech Solutions",
      logo: "https://media.istockphoto.com/id/1161702497/vector/team-of-programmer-concept-with-devops-software-development-practices-methodology-vector.jpg?s=612x612&w=0&k=20&c=5cqLQaudaYaXv3OdYQHjt-F-LhcuOiBhXWtHLMwj4PU=",
      industry: "Cloud Computing",
    },
    location: {
      city: "Seattle",
      state: "WA",
      country: "USA",
      remote: true,
    },
    description: "We're looking for a skilled DevOps Engineer to help automate and optimize our infrastructure. You'll work on CI/CD pipelines, cloud infrastructure, and monitoring systems.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Experience with AWS, Azure, or GCP",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Understanding of networking and security principles",
    ],
    salary: {
      min: 115000,
      max: 145000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "mid-level",
    postedDate: "2025-03-25",
    deadline: "2025-05-15",
    featured: true,
    applications: 9,
    tags: ["DevOps", "AWS", "Kubernetes", "Remote"],
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: {
      id: "c6",
      name: "Growth Marketing Inc.",
      logo: "https://images-platform.99static.com//KogQze8KOyAQosMtiCIHsfCRXJw=/220x188:783x751/fit-in/500x500/99designs-contests-attachments/63/63803/attachment_63803293",
      industry: "Marketing",
    },
    location: {
      city: "Chicago",
      state: "IL",
      country: "USA",
      remote: false,
    },
    description: "Join our marketing team to help drive growth for our clients. You'll be involved in planning and executing marketing campaigns across various channels.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Experience with social media marketing",
      "Knowledge of SEO and content marketing",
      "Experience with marketing analytics tools",
      "Strong written and verbal communication skills",
    ],
    salary: {
      min: 60000,
      max: 80000,
      currency: "USD",
      period: "yearly",
    },
    employmentType: "full-time",
    experience: "entry-level",
    postedDate: "2025-03-28",
    featured: false,
    applications: 20,
    tags: ["Marketing", "Digital", "Social Media", "SEO"],
  },
];

export const getJobs = (): Promise<JobPosting[]> => {
  try {
    const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    
    if (storedJobs.length > 0) {
      return Promise.resolve([...storedJobs, ...postedJobs]);
    }
    
    localStorage.setItem("jobs", JSON.stringify(mockJobs));
    return Promise.resolve([...mockJobs, ...postedJobs]);
  } catch (err) {
    console.error("Error accessing localStorage:", err);
    return Promise.resolve(mockJobs);
  }
};

export const getJobById = (id: string): Promise<JobPosting | undefined> => {
  try {
    const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    const allJobs = [...storedJobs, ...postedJobs];
    const job = allJobs.find(job => job.id === id);
    
    if (job) {
      return Promise.resolve(job);
    }
    
    return Promise.resolve(mockJobs.find(job => job.id === id));
  } catch (err) {
    console.error("Error accessing localStorage:", err);
    return Promise.resolve(mockJobs.find(job => job.id === id));
  }
};

export const getFeaturedJobs = (): Promise<JobPosting[]> => {
  try {
    const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    const allJobs = [...storedJobs, ...postedJobs];
    
    const featuredJobs = allJobs.filter(job => job.featured);
    
    if (featuredJobs.length === 0) {
      return Promise.resolve(mockJobs.filter(job => job.featured));
    }
    
    return Promise.resolve(featuredJobs);
  } catch (err) {
    console.error("Error accessing localStorage:", err);
    return Promise.resolve(mockJobs.filter(job => job.featured));
  }
};

export const searchJobs = (query: string): Promise<JobPosting[]> => {
  try {
    const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    const allJobs = [...storedJobs, ...postedJobs];
    
    query = query.toLowerCase();
    return Promise.resolve(
      allJobs.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.name.toLowerCase().includes(query) ||
        job.location.city.toLowerCase().includes(query) ||
        job.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    );
  } catch (err) {
    console.error("Error accessing localStorage:", err);
    query = query.toLowerCase();
    return Promise.resolve(
      mockJobs.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.name.toLowerCase().includes(query) ||
        job.location.city.toLowerCase().includes(query) ||
        job.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    );
  }
};

export const saveJob = (userId: string, jobId: string): Promise<boolean> => {
  try {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "{}");
    const userSavedJobs = savedJobs[userId] || [];
    
    if (userSavedJobs.includes(jobId)) {
      return Promise.resolve(true);
    }
    
    userSavedJobs.push(jobId);
    savedJobs[userId] = userSavedJobs;
    
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    return Promise.resolve(true);
  } catch (err) {
    console.error("Error saving job:", err);
    return Promise.resolve(false);
  }
};

export const unsaveJob = (userId: string, jobId: string): Promise<boolean> => {
  try {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "{}");
    const userSavedJobs = savedJobs[userId] || [];
    
    savedJobs[userId] = userSavedJobs.filter((id: string) => id !== jobId);
    
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    return Promise.resolve(true);
  } catch (err) {
    console.error("Error unsaving job:", err);
    return Promise.resolve(false);
  }
};

export const isJobSaved = (userId: string, jobId: string): Promise<boolean> => {
  try {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "{}");
    const userSavedJobs = savedJobs[userId] || [];
    return Promise.resolve(userSavedJobs.includes(jobId));
  } catch (err) {
    console.error("Error checking if job is saved:", err);
    return Promise.resolve(false);
  }
};

export const postJob = (job: Omit<JobPosting, "id">): Promise<JobPosting> => {
  try {
    const newJob = { 
      ...job,
      id: `custom-${Date.now()}`
    };
    
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    postedJobs.push(newJob);
    
    localStorage.setItem("postedJobs", JSON.stringify(postedJobs));
    
    return Promise.resolve(newJob);
  } catch (err) {
    console.error("Error posting job:", err);
    return Promise.reject("Failed to post job");
  }
};
