
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { JobPosting } from "@/types/job";
import { getJobs, searchJobs } from "@/services/jobService";
import JobCard from "@/components/JobCard";
import JobSearchForm from "@/components/JobSearchForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const JobsPage = () => {
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState<string[]>([]);
  const [experienceLevelFilter, setExperienceLevelFilter] = useState<string[]>([]);
  const [remoteFilter, setRemoteFilter] = useState(false);
  
  const searchQuery = searchParams.get('q') || '';
  const locationQuery = searchParams.get('location') || '';

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        let jobData: JobPosting[];
        
        if (searchQuery) {
          jobData = await searchJobs(searchQuery);
        } else {
          jobData = await getJobs();
        }
        
        setJobs(jobData);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [searchQuery]);

  useEffect(() => {
    // Apply filters
    let results = [...jobs];
    
    // Filter by location if provided
    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      results = results.filter(job => 
        job.location.city.toLowerCase().includes(query) || 
        job.location.state.toLowerCase().includes(query) ||
        job.location.country.toLowerCase().includes(query) ||
        (job.location.remote && query === 'remote')
      );
    }
    
    // Filter by employment type
    if (employmentTypeFilter.length > 0) {
      results = results.filter(job => employmentTypeFilter.includes(job.employmentType));
    }
    
    // Filter by experience level
    if (experienceLevelFilter.length > 0) {
      results = results.filter(job => experienceLevelFilter.includes(job.experience));
    }
    
    // Filter by remote option
    if (remoteFilter) {
      results = results.filter(job => job.location.remote);
    }
    
    setFilteredJobs(results);
  }, [jobs, locationQuery, employmentTypeFilter, experienceLevelFilter, remoteFilter]);

  const handleEmploymentTypeChange = (type: string) => {
    setEmploymentTypeFilter(prev => {
      if (prev.includes(type)) {
        return prev.filter(item => item !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const handleExperienceLevelChange = (level: string) => {
    setExperienceLevelFilter(prev => {
      if (prev.includes(level)) {
        return prev.filter(item => item !== level);
      } else {
        return [...prev, level];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-job-blue-600 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Find Your Perfect Job</h1>
          <JobSearchForm />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              {/* Employment Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-gray-600 mb-2">Employment Type</h3>
                <div className="space-y-2">
                  {['full-time', 'part-time', 'contract', 'internship'].map((type) => (
                    <div key={type} className="flex items-center">
                      <Checkbox 
                        id={`type-${type}`} 
                        checked={employmentTypeFilter.includes(type)}
                        onCheckedChange={() => handleEmploymentTypeChange(type)}
                      />
                      <Label htmlFor={`type-${type}`} className="ml-2 text-sm">
                        {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Experience Level Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-gray-600 mb-2">Experience Level</h3>
                <div className="space-y-2">
                  {['entry-level', 'mid-level', 'senior', 'executive'].map((level) => (
                    <div key={level} className="flex items-center">
                      <Checkbox 
                        id={`level-${level}`} 
                        checked={experienceLevelFilter.includes(level)}
                        onCheckedChange={() => handleExperienceLevelChange(level)}
                      />
                      <Label htmlFor={`level-${level}`} className="ml-2 text-sm">
                        {level.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Remote Only Filter */}
              <div className="mb-6">
                <div className="flex items-center">
                  <Checkbox 
                    id="remote-only" 
                    checked={remoteFilter}
                    onCheckedChange={() => setRemoteFilter(!remoteFilter)}
                  />
                  <Label htmlFor="remote-only" className="ml-2 text-sm">
                    Remote Only
                  </Label>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setEmploymentTypeFilter([]);
                  setExperienceLevelFilter([]);
                  setRemoteFilter(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                {searchQuery && ` for "${searchQuery}"`}
                {locationQuery && ` in "${locationQuery}"`}
              </h2>
              
              <div className="w-full md:w-auto">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                    <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {loading ? (
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters to find more jobs</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setEmploymentTypeFilter([]);
                    setExperienceLevelFilter([]);
                    setRemoteFilter(false);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
