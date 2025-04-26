
import JobSearchForm from "@/components/JobSearchForm";
import FeaturedJobsSection from "@/components/FeaturedJobsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Building, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-job-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Find Your Dream Job Today
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Connecting talented professionals with top employers worldwide. 
              Browse thousands of job listings to find the perfect match for your skills and experience.
            </p>

            <div className="mt-10 flex justify-center">
              <JobSearchForm />
            </div>

            <div className="mt-8 text-gray-600 text-sm">
              Popular searches: Web Developer, Data Scientist, Product Manager, UX Designer
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <FeaturedJobsSection />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How JobHive Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to kickstart your job search or find the perfect candidate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Build your professional profile to showcase your skills and experience to potential employers.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply to Jobs</h3>
              <p className="text-gray-600">Browse through thousands of job postings and apply to positions that match your skills and interests.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Hired</h3>
              <p className="text-gray-600">Interview with top companies and receive job offers that advance your career to the next level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-job-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to take the next step in your career?</h2>
              <p className="mt-2 text-job-blue-100">Create an account today to apply for jobs, save your searches, and get personalized job recommendations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary" className="bg-white text-job-blue-600 hover:bg-gray-100">
                <Link to="/register">Create an Account</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-job-blue-600">
                <Link to="/employers" className="flex items-center">For Employers <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
