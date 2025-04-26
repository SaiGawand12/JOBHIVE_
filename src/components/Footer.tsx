
import { Link } from "react-router-dom";
import { Briefcase, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Footer = () => {
  const { user } = useUser();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-job-blue-500" />
              <span className="ml-2 text-xl font-bold text-job-blue-500">JobHive</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Connecting top talent with great employers. Your career journey starts here.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/SaiGawand12/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-job-blue-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sai-gawand-aa719025b/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-job-blue-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-job-blue-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com/saigawand90/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-job-blue-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/post-job" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/employer-resources" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Employer Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-job-blue-500 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} JobHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
