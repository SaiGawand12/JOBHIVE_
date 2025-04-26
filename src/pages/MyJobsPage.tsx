
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JobPosting } from "@/types/job";
import { useUser } from "@/contexts/UserContext";
import JobCard from "@/components/JobCard";
import { Plus, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MyJobsPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [myJobs, setMyJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not logged in
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to view your jobs",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Only employers can post jobs
    if (user.userType !== "employer") {
      toast({
        title: "Access denied",
        description: "Only employers can post and manage jobs",
        variant: "destructive",
      });
      navigate("/jobs");
      return;
    }

    // Load posted jobs from localStorage
    const loadPostedJobs = () => {
      try {
        const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
        console.log("All posted jobs:", postedJobs);
        // Filter jobs posted by this user
        const userJobs = postedJobs.filter((job: JobPosting) => job.company.id === user.id);
        console.log("User's posted jobs:", userJobs);
        setMyJobs(userJobs);
      } catch (err) {
        console.error("Failed to load posted jobs:", err);
        toast({
          title: "Error",
          description: "Failed to load your posted jobs",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadPostedJobs();
  }, [user, navigate, toast]);

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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Posted Jobs</h1>
          <p className="text-gray-600 mt-1">Manage the jobs you've posted on JobHive</p>
        </div>
        <Button 
          onClick={() => navigate("/post-job")} 
          className="bg-job-blue-500 hover:bg-job-blue-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>
      
      {myJobs.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">No jobs posted yet</h2>
          <p className="text-gray-600 mb-6">You haven't posted any jobs yet. Get started by posting your first job.</p>
          <Button 
            onClick={() => navigate("/post-job")} 
            className="bg-job-blue-500 hover:bg-job-blue-600"
          >
            Post Your First Job
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              showManageButtons={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJobsPage;
