
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, BarChart3, Globe, ArrowRight } from "lucide-react";

const EmployersPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-job-blue-600 to-job-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              Hire the best talent for your team
            </h1>
            <p className="mt-6 text-xl text-job-blue-100 text-center md:text-left">
              Connect with qualified candidates quickly and efficiently. 
              Post your job openings and reach thousands of job seekers today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-white text-job-blue-600 hover:bg-gray-100">
                <Link to="/post-job">Post a Job</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-job-blue-600">
                <Link to="/register?type=employer">Create Employer Account</Link>
              </Button>
            </div>
            <div className="mt-8 text-job-blue-100 text-center md:text-left">
              <p>Join thousands of companies that trust JobHive</p>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-80">
              {/* This would be replaced with actual company logos */}
              <div className="h-8 bg-white/20 rounded"></div>
              <div className="h-8 bg-white/20 rounded"></div>
              <div className="h-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose JobHive?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We help you find the right candidates efficiently and affordably
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeted Reach</h3>
              <p className="text-gray-600">
                Connect with qualified candidates who have the skills and experience you're looking for.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficient Hiring</h3>
              <p className="text-gray-600">
                Streamlined tools to help you sort, filter, and identify the best candidates quickly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-job-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-job-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Get valuable analytics on your job postings and applicant engagement to optimize your hiring.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Post jobs and start receiving applications in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-job-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create an Account</h3>
              <p className="text-gray-600 text-sm">
                Sign up as an employer and complete your company profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-job-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Post a Job</h3>
              <p className="text-gray-600 text-sm">
                Fill out the job details, requirements, and compensation information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-job-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Applications</h3>
              <p className="text-gray-600 text-sm">
                Get applications from qualified candidates and review their profiles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-job-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hire the Best</h3>
              <p className="text-gray-600 text-sm">
                Contact candidates directly through our platform and make the hire.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-job-blue-500 hover:bg-job-blue-600">
              <Link to="/post-job">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a plan that works best for your hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-gray-600">/job post</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                  Perfect for occasional hiring needs
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Single job posting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">30-day listing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Basic candidate filtering</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Button asChild className="w-full">
                  <Link to="/post-job?plan=basic">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white border-2 border-job-blue-500 rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute top-0 right-0 bg-job-blue-500 text-white text-xs font-bold py-1 px-3 rounded-bl">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                  Ideal for growing teams and regular hiring
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Up to 5 active job postings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">60-day listings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Advanced candidate filtering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Featured company profile</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Button asChild className="w-full bg-job-blue-500 hover:bg-job-blue-600">
                  <Link to="/post-job?plan=standard">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                  For high-volume recruiters and enterprises
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Unlimited job postings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">90-day listings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Priority placement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600 text-sm">Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/post-job?plan=premium">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">HR Manager, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "JobHive has transformed our hiring process. We found highly qualified candidates in half the time it used to take us."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Mark Rodriguez</h4>
                  <p className="text-sm text-gray-500">Founder, StartupX</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a startup, finding the right talent is crucial. JobHive made it easy to connect with candidates who were perfect for our company culture."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Lisa Thompson</h4>
                  <p className="text-sm text-gray-500">Recruiting Lead, Enterprise Inc</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quality of applicants we receive through JobHive is consistently higher than other platforms we've used in the past."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-job-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to find your next great hire?</h2>
            <p className="text-job-blue-100 mb-8 text-lg">
              Join thousands of employers who trust JobHive for their hiring needs
            </p>
            <Button asChild size="lg" className="bg-white text-job-blue-600 hover:bg-gray-100">
              <Link to="/post-job" className="flex items-center">
                Post a Job Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployersPage;
