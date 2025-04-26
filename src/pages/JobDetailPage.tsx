
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JobPosting } from "@/types/job";
import { getJobById, saveJob, unsaveJob, isJobSaved } from "@/services/jobService";
import { AlertCircle, MapPin, Building, Clock, Calendar, Briefcase, DollarSign, Share2, Bookmark, ArrowLeftCircle, BookmarkCheck } from "lucide-react";
import { formatDistance } from "date-fns";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";

const JobDetailPage = () => {
  const { jobId } = useParams();
  const { user } = useUser();
  const { toast } = useToast();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [savingJob, setSavingJob] = useState(false);

  useEffect(() => {
    const loadJob = async () => {
      if (!jobId) {
        setError("Job ID is missing");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const jobData = await getJobById(jobId);
        
        if (!jobData) {
          setError("Job not found");
        } else {
          setJob(jobData);
        }
      } catch (err) {
        setError("Error loading job data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [jobId]);

  // Check if job is saved
  useEffect(() => {
    const checkIfJobIsSaved = async () => {
      if (user && job) {
        try {
          const saved = await isJobSaved(user.id, job.id);
          setIsSaved(saved);
        } catch (err) {
          console.error("Error checking if job is saved:", err);
        }
      }
    };

    checkIfJobIsSaved();
  }, [job, user]);

  const handleSaveJob = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to save jobs",
        variant: "destructive"
      });
      return;
    }

    if (!job) return;

    try {
      setSavingJob(true);
      
      if (isSaved) {
        const success = await unsaveJob(user.id, job.id);
        if (success) {
          setIsSaved(false);
          toast({
            title: "Job removed",
            description: "The job has been removed from saved jobs"
          });
        }
      } else {
        const success = await saveJob(user.id, job.id);
        if (success) {
          setIsSaved(true);
          toast({
            title: "Job saved",
            description: "The job has been saved to your profile"
          });
        }
      }
    } catch (err) {
      toast({
        title: "Error",
        description: isSaved ? "Failed to remove job from saved jobs" : "Failed to save job",
        variant: "destructive"
      });
    } finally {
      setSavingJob(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-lg p-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-lg p-8 text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{error || "Job not found"}</h1>
            <p className="text-gray-600 mb-6">We couldn't find the job you're looking for.</p>
            <Button asChild>
              <Link to="/jobs">Browse All Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistance(postedDate, new Date(), { addSuffix: true });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/jobs" className="inline-flex items-center text-job-blue-500 hover:text-job-blue-600 mb-6">
          <ArrowLeftCircle className="h-5 w-5 mr-2" />
          Back to Jobs
        </Link>
        
        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img 
                    src={job.company.logo} 
                    alt={`${job.company.name} logo`} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{job.title}</h1>
                  <div className="mt-2 md:mt-0 flex space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={isSaved ? "default" : "outline"} 
                      size="icon" 
                      className={`rounded-full ${isSaved ? 'bg-job-blue-500 hover:bg-job-blue-600' : ''}`}
                      onClick={handleSaveJob}
                      disabled={savingJob}
                    >
                      {isSaved ? <BookmarkCheck className="h-4 w-4 text-white" /> : <Bookmark className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="mt-2">
                  <Link to={`/companies/${job.company.id}`} className="text-lg font-medium text-job-blue-500 hover:underline">
                    {job.company.name}
                  </Link>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{job.location.city}, {job.location.state}{job.location.remote ? ' (Remote)' : ''}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{job.experience.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{job.employmentType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  </div>
                  
                  {job.salary && (
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                      <span>
                        {job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}/{job.salary.period.replace('ly', '')}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Posted {timeAgo}</span>
                  </div>
                  {job.applications !== undefined && (
                    <div className="flex items-center text-sm text-gray-500 ml-4">
                      <span>{job.applications} {job.applications === 1 ? 'application' : 'applications'} so far</span>
                    </div>
                  )}
                  {job.deadline && (
                    <div className="flex items-center text-sm text-gray-500 ml-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Apply by {new Date(job.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
              <Button size="lg" className="bg-job-blue-500 hover:bg-job-blue-600">
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant={isSaved ? "default" : "outline"}
                className={isSaved ? "bg-job-blue-500 hover:bg-job-blue-600" : ""}
                onClick={handleSaveJob}
                disabled={savingJob}
              >
                {savingJob ? (
                  <>
                    <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    {isSaved ? "Unsaving..." : "Saving..."}
                  </>
                ) : (
                  <>
                    {isSaved ? <BookmarkCheck className="h-5 w-5 mr-2" /> : <Bookmark className="h-5 w-5 mr-2" />}
                    {isSaved ? "Saved" : "Save Job"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{job.description}</p>
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t">
                <h2 className="text-xl font-semibold mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Company Info & Apply */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">About the Company</h2>
              
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img 
                    src={job.company.logo} 
                    alt={`${job.company.name} logo`} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">{job.company.name}</h3>
                  {job.company.industry && (
                    <p className="text-sm text-gray-500">{job.company.industry}</p>
                  )}
                </div>
              </div>
              
              {job.company.description && (
                <p className="text-gray-600 text-sm mb-4">{job.company.description}</p>
              )}
              
              {job.company.website && (
                <a 
                  href={job.company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-job-blue-500 hover:text-job-blue-600 text-sm font-medium"
                >
                  Visit Website →
                </a>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <Button className="w-full bg-job-blue-500 hover:bg-job-blue-600 mb-3">Apply Now</Button>
                <Button 
                  variant={isSaved ? "default" : "outline"}
                  className={`w-full ${isSaved ? "bg-job-blue-500 hover:bg-job-blue-600" : ""}`}
                  onClick={handleSaveJob}
                  disabled={savingJob}
                >
                  {savingJob ? (
                    <>
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      {isSaved ? "Unsaving..." : "Saving..."}
                    </>
                  ) : (
                    <>
                      {isSaved ? <BookmarkCheck className="h-4 w-4 mr-2" /> : <Bookmark className="h-4 w-4 mr-2" />}
                      {isSaved ? "Saved" : "Save Job"}
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="bg-job-blue-50 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-job-blue-700 mb-2">Not the right job?</h3>
              <p className="text-job-blue-600 text-sm mb-4">
                Create a job alert and never miss a job that matches your criteria.
              </p>
              <Button variant="outline" className="w-full border-job-blue-200 text-job-blue-700 hover:bg-job-blue-100">
                Create Job Alert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
