
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, FileText, Video } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Employer Resources</h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        Access our collection of resources designed to help you optimize your recruitment process, 
        attract top talent, and build a stronger team.
      </p>
      
      {/* Featured resources */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="h-48 bg-job-blue-100 flex items-center justify-center">
            <FileText className="h-16 w-16 text-job-blue-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Hiring Guide 2025</h3>
            <p className="text-gray-600 mb-4">
              A comprehensive guide to recruitment trends, salary insights, and effective hiring strategies for the coming year.
            </p>
            <Button className="w-full flex items-center justify-center bg-job-blue-500 hover:bg-job-blue-600">
              <Download className="h-4 w-4 mr-2" />
              Download Guide
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="h-48 bg-job-blue-100 flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-job-blue-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Writing Effective Job Descriptions</h3>
            <p className="text-gray-600 mb-4">
              Learn how to craft compelling job descriptions that attract qualified candidates and reduce turnover.
            </p>
            <Button className="w-full flex items-center justify-center bg-job-blue-500 hover:bg-job-blue-600">
              <Download className="h-4 w-4 mr-2" />
              Download Template
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="h-48 bg-job-blue-100 flex items-center justify-center">
            <Video className="h-16 w-16 text-job-blue-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Interviewing Best Practices</h3>
            <p className="text-gray-600 mb-4">
              Video tutorial series on conducting effective interviews that assess both skills and cultural fit.
            </p>
            <Button className="w-full flex items-center justify-center bg-job-blue-500 hover:bg-job-blue-600">
              Watch Series
            </Button>
          </div>
        </div>
      </div>
      
      {/* Articles section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "5 Strategies to Attract Passive Candidates",
            excerpt: "Learn effective techniques to engage with talented professionals who aren't actively job hunting.",
            date: "April 5, 2025"
          },
          {
            title: "Building an Inclusive Recruitment Process",
            excerpt: "Step-by-step guide to creating a hiring process that embraces diversity and reduces unconscious bias.",
            date: "March 28, 2025"
          },
          {
            title: "Remote Hiring: Challenges and Solutions",
            excerpt: "Best practices for recruiting, interviewing, and onboarding employees in a distributed work environment.",
            date: "March 15, 2025"
          },
          {
            title: "Using Data Analytics in Your Recruitment Strategy",
            excerpt: "How to leverage recruitment metrics to optimize your hiring process and make better decisions.",
            date: "March 7, 2025"
          }
        ].map((article, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-2">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Link to="#" className="text-job-blue-500 hover:text-job-blue-600 text-sm font-medium">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Webinars section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Webinars</h2>
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-16">
        <div className="space-y-6">
          {[
            {
              title: "The Future of Work: Hiring Trends for 2026",
              date: "April 20, 2025",
              time: "11:00 AM - 12:00 PM EST",
              speaker: "Dr. Maya Rodriguez, Workplace Futurist"
            },
            {
              title: "AI in Recruitment: Ethical Considerations and Best Practices",
              date: "May 5, 2025",
              time: "2:00 PM - 3:30 PM EST",
              speaker: "James Chen, AI Ethics Specialist"
            },
            {
              title: "Building a Strong Employer Brand to Attract Top Talent",
              date: "May 18, 2025",
              time: "10:00 AM - 11:00 AM EST",
              speaker: "Sarah Johnson, Brand Strategist"
            }
          ].map((webinar, index) => (
            <div key={index} className={index > 0 ? "pt-6 border-t" : ""}>
              <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{webinar.title}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Date:</span> {webinar.date}, {webinar.time}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Speaker:</span> {webinar.speaker}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                  <Button className="bg-job-blue-500 hover:bg-job-blue-600">Register Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter sign-up */}
      <div className="bg-job-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated with Employer Resources</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Subscribe to our monthly newsletter to receive the latest hiring insights, exclusive resources, and industry trends.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-job-blue-500"
          />
          <Button className="bg-job-blue-500 hover:bg-job-blue-600">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployerResourcesPage;
