
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JobPosting } from "@/types/job";
import { useUser } from "@/contexts/UserContext";
import JobCard from "@/components/JobCard";
import { Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SavedJobsPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [savedJobs, setSavedJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [allJobs, setAllJobs] = useState<JobPosting[]>([]);

  useEffect(() => {
    // Redirect to login if not logged in
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to view your saved jobs",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Load all jobs first
    const loadAllJobs = () => {
      try {
        // Load from localStorage
        const storedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
        const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
        const combinedJobs = [...storedJobs, ...postedJobs];
        setAllJobs(combinedJobs);
        console.log("All jobs loaded:", combinedJobs.length);
        return combinedJobs;
      } catch (err) {
        console.error("Failed to load jobs:", err);
        return [];
      }
    };

    // Load saved jobs from localStorage
    const loadSavedJobs = (jobs: JobPosting[]) => {
      try {
        // Get list of saved job IDs for this user
        const savedJobsMap = JSON.parse(localStorage.getItem("savedJobs") || "{}");
        const userSavedJobIds = savedJobsMap[user.id] || [];
        console.log("User saved job IDs:", userSavedJobIds);
        
        if (userSavedJobIds.length > 0 && jobs.length > 0) {
          const userSavedJobs = jobs.filter((job: JobPosting) => 
            userSavedJobIds.includes(job.id)
          );
          console.log("Filtered saved jobs:", userSavedJobs.length);
          setSavedJobs(userSavedJobs);
        } else {
          setSavedJobs([]);
        }
      } catch (err) {
        console.error("Failed to load saved jobs:", err);
        toast({
          title: "Error",
          description: "Failed to load your saved jobs",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    const jobs = loadAllJobs();
    loadSavedJobs(jobs);
  }, [user, navigate, toast]);

  const handleUnsaveJob = (jobId: string) => {
    try {
      // Get current saved jobs
      const savedJobsMap = JSON.parse(localStorage.getItem("savedJobs") || "{}");
      const userSavedJobIds = savedJobsMap[user?.id] || [];
      
      // Remove job ID from saved list
      const updatedSavedJobIds = userSavedJobIds.filter((id: string) => id !== jobId);
      savedJobsMap[user?.id] = updatedSavedJobIds;
      
      // Save back to localStorage
      localStorage.setItem("savedJobs", JSON.stringify(savedJobsMap));
      
      // Update UI
      setSavedJobs(savedJobs.filter(job => job.id !== jobId));
      
      toast({
        title: "Job removed",
        description: "The job has been removed from your saved jobs",
      });
    } catch (err) {
      console.error("Failed to unsave job:", err);
      toast({
        title: "Error",
        description: "Failed to remove job from saved jobs",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-job-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Saved Jobs</h1>
        <p className="text-gray-600 mt-1">Jobs you've saved to review later</p>
      </div>
      
      {savedJobs.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <Bookmark className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">No saved jobs</h2>
          <p className="text-gray-600 mb-6">You haven't saved any jobs yet. Browse jobs and click the 'Save Job' button to save them for later.</p>
          <button 
            onClick={() => navigate("/jobs")} 
            className="bg-job-blue-500 hover:bg-job-blue-600 text-white font-medium px-5 py-2 rounded-md"
          >
            Browse Jobs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onUnsaveJob={() => handleUnsaveJob(job.id)}
              isSaved={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobsPage;
