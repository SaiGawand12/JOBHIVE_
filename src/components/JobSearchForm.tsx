
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const JobSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (searchTerm) {
      params.append("q", searchTerm);
    }
    
    if (location) {
      params.append("location", location);
    }
    
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            className="pl-10 py-6 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="City, state, or remote"
            className="pl-10 py-6 text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <Button type="submit" className="py-6 bg-job-blue-500 hover:bg-job-blue-600">
          Search Jobs
        </Button>
      </div>
    </form>
  );
};

export default JobSearchForm;
