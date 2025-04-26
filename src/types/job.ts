
export type JobLocation = {
  city: string;
  state: string;
  country: string;
  remote: boolean;
};

export type CompanyInfo = {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  industry?: string;
};

export type JobPosting = {
  id: string;
  title: string;
  company: CompanyInfo;
  location: JobLocation;
  description: string;
  requirements: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
    period: 'hourly' | 'monthly' | 'yearly';
  };
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: 'entry-level' | 'mid-level' | 'senior' | 'executive';
  postedDate: string;
  deadline?: string;
  featured: boolean;
  applications?: number;
  tags?: string[];
};
