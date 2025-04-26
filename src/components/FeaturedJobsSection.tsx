
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JobPosting } from "@/types/job";
import { getFeaturedJobs } from "@/services/jobService";
import JobCard from "@/components/JobCard";

const FeaturedJobsSection = () => {
  const [featuredJobs, setFeaturedJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedJobs = async () => {
      try {
        setLoading(true);
        const jobs = await getFeaturedJobs();
        setFeaturedJobs(jobs);
      } catch (error) {
        console.error("Error loading featured jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedJobs();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="mt-1 text-gray-600">Handpicked opportunities to apply for right now</p>
          </div>
          <Button asChild variant="outline" className="mt-4 sm:mt-0">
            <Link to="/jobs">View all jobs</Link>
          </Button>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
