
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JobPosting } from "@/types/job";
import { MapPin, Calendar, Briefcase, Building, DollarSign, BookmarkCheck, BookmarkPlus } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { saveJob, unsaveJob, isJobSaved } from "@/services/jobService";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

type JobCardProps = {
  job: JobPosting;
  isFeatured?: boolean;
  showManageButtons?: boolean;
  onUnsaveJob?: () => void;
  isSaved?: boolean;
};

const JobCard = ({ job, isFeatured, showManageButtons, onUnsaveJob, isSaved: initialIsSaved }: JobCardProps) => {
  const { user } = useUser();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(initialIsSaved || false);
  const [checkingSaved, setCheckingSaved] = useState(true);
  
  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });

  // Check if job is saved
  useEffect(() => {
    if (user) {
      isJobSaved(user.id, job.id)
        .then(saved => {
          setIsSaved(saved);
          setCheckingSaved(false);
        })
        .catch(err => {
          console.error("Error checking if job is saved:", err);
          setCheckingSaved(false);
        });
    } else {
      setCheckingSaved(false);
    }
  }, [job.id, user]);

  const handleSaveJob = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to save jobs",
        variant: "destructive"
      });
      return;
    }

    try {
      const success = await saveJob(user.id, job.id);
      if (success) {
        setIsSaved(true);
        toast({
          title: "Job saved",
          description: "The job has been saved to your profile"
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to save job",
        variant: "destructive"
      });
    }
  };

  const handleUnsaveJob = async () => {
    if (!user) return;

    try {
      const success = await unsaveJob(user.id, job.id);
      if (success) {
        setIsSaved(false);
        toast({
          title: "Job removed",
          description: "The job has been removed from saved jobs"
        });
        
        // If in Saved Jobs page, call parent component's handler to remove from list
        if (onUnsaveJob) {
          onUnsaveJob();
        }
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to remove job from saved jobs",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className={`overflow-hidden h-full border ${isFeatured ? 'border-job-blue-200 bg-job-blue-50/30' : ''}`}>
      <CardContent className="p-0">
        {isFeatured && (
          <div className="bg-job-blue-500 text-white text-xs font-medium py-1 px-3 text-center">
            Featured Job
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                {job.company.logo ? (
                  <img 
                    src={job.company.logo} 
                    alt={`${job.company.name} logo`} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Building className="h-6 w-6 text-gray-400" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                  <Link to={`/jobs/${job.id}`} className="hover:text-job-blue-500 transition-colors">
                    {job.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">{job.company.name}</p>
              </div>
            </div>
            
            {!checkingSaved && user && (
              isSaved ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleUnsaveJob} 
                  className="h-8 flex items-center border-job-blue-200 text-job-blue-600"
                >
                  <BookmarkCheck className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Saved</span>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveJob}
                  className="h-8 flex items-center"
                >
                  <BookmarkPlus className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Save</span>
                </Button>
              )
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>{job.location.city}, {job.location.state}{job.location.remote ? ' (Remote)' : ''}</span>
            </div>
            
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
              <span>{job.employmentType.replace('-', ' ')}</span>
            </div>

            {job.salary && (
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                <span>
                  {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}
                </span>
              </div>
            )}
            
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>Posted {timeAgo}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-1">
            {job.tags?.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                {tag}
              </Badge>
            ))}
            {job.tags && job.tags.length > 3 && (
              <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                +{job.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="mt-5 flex justify-between items-center">
            <Link to={`/jobs/${job.id}`} className="text-job-blue-500 hover:text-job-blue-600 text-sm font-medium">
              View Details
            </Link>
            
            {showManageButtons && user && job.company.id === user.id && (
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">Edit</Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
